import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { homePage } from './lib/homePage.js';
import { notFoundResponse } from './middleware/notFoundResponse.js';
import { fatalServerErrorResponse } from './middleware/fatalServerErrorResponse.js';
import { notFoundPage } from './lib/notFoundPage.js';
import { registerPostAPI } from './api/registerAPI.js';
import { loginGetAPI, loginPostAPI } from './api/loginAPI.js';
import { logoutGetAPI } from './api/logoutAPI.js';
import { postGetAPI, postPostAPI } from './api/postAPI.js';
import { getUserData } from './middleware/getUserData.js';
import { adminsOnly, usersOnly } from './middleware/authorizedAccessOnly.js';
import { notLoggedInAccessOnly } from './middleware/notLoggedInAccessOnly.js';
import { uploadApiRouter } from './api/uploadAPI.js';
import { adminApiRouter } from './router/adminRouter.js';
import { postReactionPostAPI } from './api/reactionAPI.js';
import { connection } from './db.js';

const app = express();
const port = process.env.PORT || 5114;

// const corsOptions = {
//   origin: 'https://social-website-gandalizdis.onrender.com', // Frontend URL
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these methods
//   allowedHeaders: [
//     'Content-Type',
//     'Authorization',
//     'Cookie',
//     'X-Requested-With',
//   ], // Include all needed headers
// };

const corsOptions = {
  //Temporary Allow All Origins (Debug Only)
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
};
app.use(cors(corsOptions));

// Set up CORS middleware
app.use(cors(corsOptions));

// Preflight request handler for OPTIONS
app.options('*', (req, res) => {
  res.header(
    'Access-Control-Allow-Origin',
    'https://social-website-gandalizdis.onrender.com'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Cookie, X-Requested-With'
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  res.sendStatus(200);
});

// Middleware to log requests
app.use((req, res, next) => {
  console.log('Request received:', req.method, req.url);
  console.log('Origin:', req.headers.origin);
  next();
});

// Middleware to log response headers after the response is sent
app.use((req, res, next) => {
  res.on('finish', () => {
    console.log('Response Headers:', res.getHeaders());
  });
  next();
});

// Body parsers
app.use(express.json({ type: 'application/json' }));
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static('./public'));

// Cookie parser middleware
app.use(cookieParser());
app.use(getUserData); // Middleware to extract user data from cookies

// Middleware testing
app.use((req, res, next) => {
  console.log('Middleware: cookieParser');
  next();
});
app.use((req, res, next) => {
  console.log('Middleware: getUserData');
  console.log('Cookies:', req.cookies);
  next();
});

// Route for home page
app.get('/', homePage);

// Testing CORS endpoint
app.get('/test-cors', (req, res) => {
  res.json({ message: 'CORS Test Successful' });
});

app.use((req, res, next) => {
  console.log(`Request method: ${req.method}, URL: ${req.url}`);
  console.log('Request headers:', req.headers);
  next();
});

app.use((req, res, next) => {
  res.on('finish', () => {
    console.log('Response headers:', res.getHeaders());
  });
  next();
});

// Testing database connection
app.get('/test-db-connection', async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT 1'); // testing
    res.status(200).send('Database connection successful');
  } catch (error) {
    console.error('Database connection test failed:', error);
    res.status(500).send('Database connection test failed');
  }
});

// AUTHENTICATION AND USER ROUTES

// NEIDOMU KAS TU
app.post(
  '/api/login',
  (req, res, next) => {
    res.header(
      'Access-Control-Allow-Origin',
      'https://social-website-gandalizdis.onrender.com'
    );
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  },
  notLoggedInAccessOnly,
  loginPostAPI
);

app.post('/api/register', notLoggedInAccessOnly, registerPostAPI);

// REIKIA ZINOTI KAS TU
app.get('/api/login', usersOnly, loginGetAPI);
app.get('/api/logout', usersOnly, logoutGetAPI);
app.post('/api/post', usersOnly, postPostAPI);
app.get('/api/post', usersOnly, postGetAPI);
app.get('/api/post/initial', usersOnly, postGetAPI);
app.get('/api/post/new/:newerId', usersOnly, postGetAPI);
app.get('/api/post/old/:olderId', usersOnly, postGetAPI);
// app.put('/api/post', usersOnly, postPutAPI);
// app.delete('/api/post', usersOnly, postDeleteAPI);

// REACTIONS
app.post('/api/post-reaction', usersOnly, postReactionPostAPI);

// FILE UPLOADS
app.use('/api/upload', usersOnly, uploadApiRouter);

// ADMIN ROUTES
app.use('/api/admin', adminsOnly, adminApiRouter);

// ERROR HANDLING

// Fallback for 404 (not found)
app.get('*', notFoundPage);

// Middleware for handling 404 and fatal server errors
app.use(notFoundResponse);
app.use(fatalServerErrorResponse);

// Start the server
app.listen(port, () => {
  console.log('SERVER: http://localhost:' + port);
});
