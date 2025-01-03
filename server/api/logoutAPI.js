import { connection } from '../db.js';
import { API_RESPONSE_STATUS } from '../lib/enum.js';

export async function logoutGetAPI(req, res) {
  console.log('logoutGetAPI reached'); // Add this log
  const cookie = [
    'loginToken=' + req.cookies.loginToken,
    `domain=${
      process.env.COOKIE_DOMAIN || '.social-website-final-backend.onrender.com'
    }`,
    'path=/',
    'max-age=-1',
    'SameSite=None',
    'Secure',
    'HttpOnly',
  ];

  return res.status(200).set('Set-Cookie', cookie.join('; ')).json({
    status: API_RESPONSE_STATUS.SUCCESS,
    msg: 'Ok',
  });
}
