import mysql2 from "mysql2/promise";
import dotenv from "dotenv";
import { DB_DATABASE, DB_HOST, DB_USER, DB_PASS } from "./env.js";

dotenv.config();

export let connection = null;

try {
  connection = await mysql2.createConnection({
    host: process.env.DB_HOST || DB_HOST,
    user: process.env.DB_USER || DB_USER,
    password: process.env.DB_PASSWORD || DB_PASS,
    database: process.env.DB_NAME || DB_DATABASE,
    port: process.env.DB_PORT || 3306,
  });
  console.log("Database connected successfully");
} catch (error) {
  console.error("Database connection failed:", error);
}
