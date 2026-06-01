const mysql = require('mysql2/promise');
require('dotenv').config();

async function run() {
    try {
        const pool = mysql.createPool({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT || 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        });

        await pool.query('ALTER TABLE blogs ADD COLUMN image_url VARCHAR(255)');
        console.log('Successfully added image_url column to blogs.');
        process.exit(0);
    } catch (e) {
        if (e.code === 'ER_DUP_FIELDNAME') {
            console.log('image_url column already exists.');
        } else {
            console.error('Error:', e);
        }
        process.exit(0);
    }
}
run();
