import { COOKIE_ALLOWED_SYMBOLS } from '../env.js';

export function randomString(length = 20) {
  console.log(`COOKIE_SIZE from env: ${length}`);
  let str = '';

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * COOKIE_ALLOWED_SYMBOLS.length);
    str += COOKIE_ALLOWED_SYMBOLS[index];
  }

  return str;
}
