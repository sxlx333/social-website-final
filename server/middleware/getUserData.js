import { connection } from '../db.js';
import { COOKIE_ALLOWED_SYMBOLS, COOKIE_MAX_AGE, COOKIE_SIZE } from '../env.js';
import { API_RESPONSE_STATUS, ROLE } from '../lib/enum.js';

export async function getUserData(req, res, next) {
  // Log cookies received by the server
  console.log('getUserData Middleware Executed');
  console.log('Parsed Cookies:', req.cookies);

  if (!req.cookies) {
    console.error('req.cookies is undefined');
    return next();
  }

  req.user = {
    isLoggedIn: false,
    role: ROLE.PUBLIC,
    email: '',
    id: -1,
    registeredAt: -1,
  };

  const { loginToken } = req.cookies;

  // Log the specific `loginToken`
  console.log('Parsed loginToken:', loginToken);

  if (!loginToken) {
    console.error('loginToken not found in cookies');
    return next();
  }

  if (typeof loginToken !== 'string' || loginToken.length !== COOKIE_SIZE) {
    console.log('Invalid loginToken:', loginToken); // Log why the token is considered invalid
    return next();
  }

  for (const s of loginToken) {
    if (!COOKIE_ALLOWED_SYMBOLS.includes(s)) {
      console.log('loginToken contains invalid characters:', loginToken);
      return next();
    }
  }

  let tokenObj = null;

  try {
    const sql = `
            SELECT user_id, role, token, email, registered_at, created_at
            FROM tokens
            INNER JOIN users
                ON users.id = tokens.user_id
            INNER JOIN roles
                ON roles.id = users.role_id
            WHERE token = ?;`;
    const selectResult = await connection.execute(sql, [loginToken]);

    // Log the database result
    console.log('Database query result:', selectResult);

    if (selectResult[0].length === 0) {
      console.log('No matching token found in database for:', loginToken);
      return next();
    }

    if (selectResult[0].length > 1) {
      console.log('Multiple tokens found for:', loginToken);
      return next();
    }

    tokenObj = selectResult[0][0];

    if (tokenObj.created_at.getTime() + COOKIE_MAX_AGE * 1000 < Date.now()) {
      console.log('Token expired:', tokenObj);

      const cookie = [
        `loginToken=${loginToken}`,
        `domain=${
          process.env.COOKIE_DOMAIN ||
          '.social-website-final-backend.onrender.com'
        }`,
        'path=/',
        'max-age=0',
        'SameSite=None',
        'Secure',
        'HttpOnly',
      ];

      return res.status(401).set('Set-Cookie', cookie.join('; ')).json({
        status: API_RESPONSE_STATUS.ERROR,
        msg: 'Sesija baigėsi, prisijunkite iš naujo.',
        isLoggedIn: false,
        role: ROLE.PUBLIC,
      });
    }
  } catch (error) {
    console.error('Error querying database or processing token:', error);
    return res.status(500).json({
      status: API_RESPONSE_STATUS.ERROR,
      msg: `Serverio klaida. Nepavyko atpažinti vartotojo sesijos.`,
      isLoggedIn: false,
      role: ROLE.PUBLIC,
    });
  }

  req.user = {
    isLoggedIn: true,
    role: tokenObj.role,
    id: tokenObj.user_id,
    email: tokenObj.email,
    registeredAt: tokenObj.registered_at,
  };

  // Log the user information set in the request
  console.log('User authenticated:', req.user);

  next();
}
