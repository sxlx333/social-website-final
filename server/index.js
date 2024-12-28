import express from 'express';
import cors from 'cors';
import { homePage } from './lib/homePage.js';
import { notFoundResponse } from './middleware/notFoundResponse.js';
import { fatalServerErrorResponse } from './middleware/fatalServerErrorResponse.js';
import { notFoundPage } from './lib/notFoundPage.js';
import { registerPostAPI } from './api/registerAPI.js';
import { loginGetAPI, loginPostAPI } from './api/loginAPI.js';
// import { cookieParser } from './middleware/cookieParser.js';
import cookieParser from 'cookie-parser';
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

const corsOptions = {
  origin: 'https://social-website-gandalizdis.onrender.com', // Frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these methods
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Cookie',
    'X-Requested-With',
  ], // Include all needed headers
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests

app.use(
  express.json({
    type: 'application/json',
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/test-db-connection', async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT 1'); // testing
    res.status(200).send('Database connection successful');
  } catch (error) {
    console.error('Database connection test failed:', error);
    res.status(500).send('Database connection test failed');
  }
});

app.use(express.static('./public'));
app.use(cookieParser());
app.use(getUserData);

// testing
app.use((req, res, next) => {
  console.log('Middleware: cookieParser');
  next();
});
// testing
app.use((req, res, next) => {
  console.log('Middleware: getUserData');
  console.log('Cookies:', req.cookies);
  next();
});

app.get('/', homePage);
// for test
// NEIDOMU KAS TU
app.post('/api/register', notLoggedInAccessOnly, registerPostAPI);
app.post('/api/login', notLoggedInAccessOnly, loginPostAPI);

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

app.post('/api/post-reaction', usersOnly, postReactionPostAPI);

app.use('/api/upload', usersOnly, uploadApiRouter);

app.use('/api/admin', adminsOnly, adminApiRouter);

app.get('*', notFoundPage);

app.use(notFoundResponse);
app.use(fatalServerErrorResponse);

app.listen(port, () => {
  console.log('SERVER: http://localhost:' + port);
});
