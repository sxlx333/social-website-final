import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { homePage } from './lib/homePage.js';
import { notFoundPage } from './lib/notFoundPage.js';
import { notFoundResponse } from './middleware/notFoundResponse.js';
import { fatalServerErrorResponse } from './middleware/fatalServerErrorResponse.js';
import { registerPostAPI } from './api/registerAPI.js';
import { loginGetAPI, loginPostAPI } from './api/loginAPI.js';
import { logoutGetAPI } from './api/logoutAPI.js';
import { postGetAPI, postPostAPI } from './api/postAPI.js';
import { postReactionPostAPI } from './api/reactionAPI.js';
import { getUserData } from './middleware/getUserData.js';
import { adminsOnly, usersOnly } from './middleware/authorizedAccessOnly.js';
import { notLoggedInAccessOnly } from './middleware/notLoggedInAccessOnly.js';
import { uploadApiRouter } from './api/uploadAPI.js';
import { adminApiRouter } from './router/adminRouter.js';
import { connection } from './db.js';

const app = express();
const port = process.env.PORT || 5114;

// === Middleware ===

// CORS Configuration
const corsOptions = {
  origin: 'https://social-website-gandalizdis.onrender.com',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Cookie',
    'X-Requested-With',
  ],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests

// Global Logging Middleware
app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  console.log('Request Headers:', req.headers);
  next();
});

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static('./public'));

// Cookie parser and user data middleware
app.use(cookieParser());
app.use(getUserData);

// Log cookies for debugging
app.use((req, res, next) => {
  console.log('Cookies:', req.cookies);
  next();
});

// === Routes ===

// Home Page
app.get('/', homePage);

// Authentication
app.post('/api/register', notLoggedInAccessOnly, registerPostAPI);
app.post('/api/login', loginPostAPI);
app.get('/api/login', usersOnly, loginGetAPI);
app.get('/api/logout', usersOnly, logoutGetAPI);

// Posts
app.post('/api/post', usersOnly, postPostAPI);
app.get('/api/post', usersOnly, postGetAPI);
app.get('/api/post/initial', usersOnly, postGetAPI);
app.get('/api/post/new/:newerId', usersOnly, postGetAPI);
app.get('/api/post/old/:olderId', usersOnly, postGetAPI);
// app.put('/api/post', usersOnly, postPutAPI);
// app.delete('/api/post', usersOnly, postDeleteAPI);

// Reactions
app.post('/api/post-reaction', usersOnly, postReactionPostAPI);

// File Uploads
app.use('/api/upload', usersOnly, uploadApiRouter);

// Admin Routes
app.use('/api/admin', adminsOnly, adminApiRouter);

// Database Connection Test
app.get('/test-db-connection', async (req, res) => {
  try {
    await connection.query('SELECT 1'); // Simple query to test connection
    res.status(200).send('Database connection successful');
  } catch (error) {
    console.error('Database connection test failed:', error);
    res.status(500).send('Database connection test failed');
  }
});

// === Error Handling ===

// Handle 404 (Not Found)
app.get('*', notFoundPage);

// Middleware for 404 and fatal errors
app.use(notFoundResponse);
app.use(fatalServerErrorResponse);

// Start the Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
