import jwt from 'jsonwebtoken';

import config from '../config/config';

export const createJWT = (id: string, username: string) => {
  if (!config.jwt.secret) {
    throw new Error('NO SECRET!!!!');
  }
  const token = jwt.sign({ id, username }, config.jwt.secret, {
    expiresIn: config.jwt.expires,
  });
  return token;
};
