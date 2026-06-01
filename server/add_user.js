require('dotenv').config();
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'aevicta_db'
};

async function addUser() {
    const args = process.argv.slice(2);
    
    if (args.length < 2) {
        console.log('❌ Error: Please provide a username and password.');
        console.log('Usage: node add_user.js <username> <password>');
        console.log('Example: node add_user.js john secret123');
        process.exit(1);
    }

    const username = args[0];
    const password = args[1];

    try {
        const pool = await mysql.createPool(dbConfig);
        
        // Check if user already exists
        const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);
        if (rows.length > 0) {
            console.log(`❌ Error: User '${username}' already exists in the database.`);
            process.exit(1);
        }

        // Hash password and insert
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.execute('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
        
        console.log(`✅ Success: User '${username}' has been successfully added!`);
        process.exit(0);
    } catch (error) {
        console.error('Database error:', error.message);
        process.exit(1);
    }
}

addUser();
