const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const useragent = require('useragent');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const multer = require('multer');
const uploadDir = path.join(__dirname, '../client/public/blog');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, '-'));
    }
});
const upload = multer({ storage: storage });

const app = express();
app.use(cors());
app.use(express.json());

// Serve uploaded blog images as static files
app.use('/blog', express.static(uploadDir));

// Database Connection
const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
};

let pool;

async function initDB() {
    try {
        // First connection without database to create it if not exists
        const connection = await mysql.createConnection({
            host: dbConfig.host,
            port: dbConfig.port,
            user: dbConfig.user,
            password: dbConfig.password
        });
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\``);
        await connection.end();

        pool = await mysql.createPool(dbConfig);
        console.log('MySQL Connected...');

        // Run Schema setup
        const schemaPath = path.join(__dirname, 'schema.sql');
        if (fs.existsSync(schemaPath)) {
            const schema = fs.readFileSync(schemaPath, 'utf8');
            const queries = schema.split(';').filter(q => q.trim() !== '');
            for (let query of queries) {
                await pool.query(query);
            }
            console.log('Database Schema Verified/Updated.');
        }
        
        // Create an initial admin if not exists
        const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', ['admin']);
        if (rows.length === 0) {
            const hashedPassword = await bcrypt.hash('aevicta@admin', 10);
            await pool.execute('INSERT INTO users (username, password) VALUES (?, ?)', ['admin', hashedPassword]);
            console.log('Initial admin created');
        }
    } catch (err) {
        console.error('DB Connection/Setup Error:', err.message);
    }
}

initDB();

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('Token required');
    
    try {
        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).send('Invalid Token');
    }
};

// --- AUTH ROUTES ---
app.post('/api/auth/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);
        if (rows.length === 0) return res.status(404).json({ message: 'User not found' });

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '24h' });
        res.json({ token, username: user.username });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- FORM SUBMISSIONS ---
app.post('/api/forms/loan', async (req, res) => {
    const { fullName, businessName, phone, email, loanType, amount, message } = req.body;
    try {
        await pool.execute(
            'INSERT INTO loan_applications (full_name, business_name, phone, email, loan_type, amount, message) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [fullName, businessName, phone, email, loanType, amount, message]
        );
        res.status(201).json({ message: 'Application submitted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



// --- ANALYTICS LOGGING ---
app.post('/api/analytics/log', async (req, res) => {
    const { pageUrl } = req.body;
    const agent = useragent.parse(req.headers['user-agent']);
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    try {
        await pool.execute(
            'INSERT INTO visitor_logs (ip, page_url, browser, os, device) VALUES (?, ?, ?, ?, ?)',
            [ip, pageUrl, agent.family, agent.os.family, agent.device.family]
        );
        res.status(200).send('Logged');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- BLOGS (PUBLIC) ---
app.get('/api/blogs', async (req, res) => {
    try {
        const [rows] = await pool.execute('SELECT * FROM blogs ORDER BY created_at DESC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/blogs/:id', async (req, res) => {
    try {
        const [rows] = await pool.execute('SELECT * FROM blogs WHERE id = ?', [req.params.id]);
        if (rows.length === 0) return res.status(404).json({ message: 'Blog not found' });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- ADMIN ROUTES (PROTECTED) ---
app.get('/api/admin/loans', verifyToken, async (req, res) => {
    try {
        const [rows] = await pool.execute('SELECT * FROM loan_applications ORDER BY created_at DESC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/admin/contacts', verifyToken, async (req, res) => {
    try {
        const [rows] = await pool.execute('SELECT * FROM contact_messages ORDER BY created_at DESC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.get('/api/admin/analytics', verifyToken, async (req, res) => {
    try {
        const [rows] = await pool.execute('SELECT * FROM visitor_logs ORDER BY visited_at DESC LIMIT 500');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/admin/stats', verifyToken, async (req, res) => {
    try {
        const [loans] = await pool.execute('SELECT COUNT(*) as count FROM loan_applications');
        const [contacts] = await pool.execute('SELECT COUNT(*) as count FROM contact_messages');
        const [visitors] = await pool.execute('SELECT COUNT(*) as count FROM visitor_logs');
        res.json({
            loanCount: loans[0].count,
            contactCount: contacts[0].count,
            visitorCount: visitors[0].count
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Inline Image Upload (for content editor)
app.post('/api/admin/upload-image', verifyToken, upload.single('image'), (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No image uploaded' });
    const url = `/blog/${req.file.filename}`;
    res.json({ url });
});

// Admin Blog Management
app.post('/api/admin/blogs', verifyToken, upload.single('image'), async (req, res) => {
    const { title, excerpt, content, category, author } = req.body;
    const imageUrl = req.file ? `/blog/${req.file.filename}` : null;
    
    try {
        await pool.execute(
            'INSERT INTO blogs (title, excerpt, content, category, author, image_url) VALUES (?, ?, ?, ?, ?, ?)',
            [title, excerpt, content, category, author, imageUrl]
        );
        res.status(201).json({ message: 'Blog created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/admin/blogs/:id', verifyToken, upload.single('image'), async (req, res) => {
    const { title, excerpt, content, category, author, removeImage } = req.body;
    const blogId = req.params.id;
    
    try {
        if (req.file) {
            const imageUrl = `/blog/${req.file.filename}`;
            await pool.execute(
                'UPDATE blogs SET title = ?, excerpt = ?, content = ?, category = ?, author = ?, image_url = ? WHERE id = ?',
                [title, excerpt, content, category, author, imageUrl, blogId]
            );
        } else if (removeImage === 'true') {
            await pool.execute(
                'UPDATE blogs SET title = ?, excerpt = ?, content = ?, category = ?, author = ?, image_url = NULL WHERE id = ?',
                [title, excerpt, content, category, author, blogId]
            );
        } else {
            await pool.execute(
                'UPDATE blogs SET title = ?, excerpt = ?, content = ?, category = ?, author = ? WHERE id = ?',
                [title, excerpt, content, category, author, blogId]
            );
        }
        res.status(200).json({ message: 'Blog updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/admin/blogs/:id', verifyToken, async (req, res) => {
    try {
        await pool.execute('DELETE FROM blogs WHERE id = ?', [req.params.id]);
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.post('/api/admin/upload-image', verifyToken, upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No image uploaded' });
    }
    const imageUrl = `/blog/${req.file.filename}`;
    res.status(200).json({ url: imageUrl });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
