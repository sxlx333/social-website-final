import dotenv from 'dotenv';

// Default to `.env`
let envFile = '.env';

// Check for `--env` flag to load specific environment files
for (const str of process.argv) {
  if (str.startsWith('--env=')) {
    envFile = str.split('=')[1];
  }
}

dotenv.config({
  path: envFile,
});

// Database configuration
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASS = process.env.DB_PASS || '';
export const DB_DATABASE = process.env.DB_DATABASE || 'social_website';
export const DB_PORT = process.env.DB_PORT || 3306;

// Cookie configuration
export const COOKIE_ALLOWED_SYMBOLS =
  process.env.COOKIE_ALLOWED_SYMBOLS ||
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
export const COOKIE_SIZE = +process.env.COOKIE_SIZE || 10;
export const COOKIE_MAX_AGE = +process.env.COOKIE_MAX_AGE || 86400;

// Dynamically set COOKIE_DOMAIN based on the environment
export const COOKIE_DOMAIN =
  process.env.COOKIE_DOMAIN ||
  (envFile === '.env.production' || envFile === '.env'
    ? '.onrender.com' // Use `.onrender.com` for production/staging
    : 'localhost'); // Use `localhost` for development

// Message size configuration
export const MESSAGE_MIN_SIZE = +process.env.MESSAGE_MIN_SIZE || 1;
export const MESSAGE_MAX_SIZE = +process.env.MESSAGE_MAX_SIZE || 128;
