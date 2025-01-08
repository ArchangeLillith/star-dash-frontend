import bcrypt from 'bcrypt';
import type { Express } from 'express';
import passport from 'passport';
import PassportJWT from 'passport-jwt';
import PassportLocal from 'passport-local';

import config from '../config/config';
import db from '../db/index';

export function configurePassport(app: Express) {
  console.log('Configuring Passport strategies...');

  if (!config.jwt.secret) {
    throw new Error('JWT secret is not defined in the configuration');
  }

  // Local strategy
  passport.use(
    new PassportLocal.Strategy(
      {
        session: false,
      },
      async (username, password, done) => {
        console.log(`Local strategy invoked for username: ${username}`);
        try {
          const [userFound] = await db.managers.oneByUsername(username);
          if (userFound) {
            const [authData] = await db.auth.oneById(userFound.manager_id);
            if (
              authData &&
              (await bcrypt.compare(password, authData.password))
            ) {
              return done(null, userFound);
            }
            return done(null, false, { message: 'Invalid credentials' });
          }
          return done(null, false, { message: 'Invalid credentials' });
        } catch (error) {
          console.log(`Error in local strategy:`, error);
          return done(error);
        }
      }
    )
  );

  // JWT strategy
  passport.use(
    new PassportJWT.Strategy(
      {
        jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwt.secret,
      },
      (payload, done) => {
        console.log(`JWT strategy invoked with payload:`, payload);
        done(null, payload);
      }
    )
  );

  app.use(passport.initialize());
}
