const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const useragent = require('useragent');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

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
        res.json({ token });
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

app.post('/api/forms/contact', async (req, res) => {
    const { name, email, phone, service, message } = req.body;
    try {
        await pool.execute(
            'INSERT INTO contact_messages (name, email, phone, service, message) VALUES (?, ?, ?, ?, ?)',
            [name, email, phone, service, message]
        );
        res.status(201).json({ message: 'Message sent' });
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
