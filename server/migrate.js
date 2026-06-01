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

        await pool.query('ALTER TABLE loan_applications ADD COLUMN status VARCHAR(50) DEFAULT "Pending"');
        console.log('Successfully added status column.');
        process.exit(0);
    } catch (e) {
        if (e.code === 'ER_DUP_FIELDNAME') {
            console.log('Status column already exists.');
        } else {
            console.error('Error:', e);
        }
        process.exit(0);
    }
}
run();
