import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export let connection = null;

try {
    connection = await mysql2.createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || '51gr_social',
        port: process.env.DB_PORT || 3306,
    });
    console.log('Database connected successfully');
} catch (error) {
    console.error('Database connection failed:', error);
}
