import mysql2 from 'mysql2/promise';
import { DB_HOST, DB_USER, DB_PASS, DB_DATABASE, DB_PORT } from './env.js';

export let connection = null;

(async () => {
  try {
    connection = await mysql2.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASS,
      database: DB_DATABASE,
      port: DB_PORT,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
})();
