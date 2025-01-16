/* eslint-disable no-useless-escape */
import bcrypt from 'bcrypt';
import { Router } from 'express';

import db from '../../db';
// import { logActivity } from '../../utils/logging';
import { createJWT } from '../../utils/tokens';
import { generateUUID } from 'server/utils/functions.utils';
import { DefaultSettings } from '@/context/settings/settingsProvider.utils';

const router = Router();

//POST /auth/register
router.post('/', async (req, res, next) => {
  console.log(`HIT /AUTH/REGISTER with body:`, req.body);
  try {
    const { password, username } = req.body;
    if (!username || !isValidUsername(username)) {
      const error = new Error('invalid username');
      console.log(`invalid username`);
      throw error;
    }
    const [userFound] = await db.managers.oneByUsername(username);
    console.log(`userfound???`, userFound);
    if (userFound) {
      const error = new Error('username already registered');
      console.log(`username registered already`);
      throw error;
    }

    const managerDTO = {
      id: generateUUID(),
      username,
      password,
      settings: DefaultSettings,
    };

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    await db.managers.insertManager(managerDTO);
    delete managerDTO.username;
    managerDTO.password = hash;

    //Create settings for new user
    await db.managers.updateSettings(managerDTO.id, managerDTO.settings);

    await db.managers.insertPassword(managerDTO);
    delete managerDTO.password;
    const token = createJWT(managerDTO.id, managerDTO.username);
    // logActivity(
    //   managerDTO.id,
    //   'New user registered to site~',
    //   `Username: ${managerDTO.username}, Role: ${authorDTO.role}`
    // );
    console.log(`token`, token);
    res.json({ token });
  } catch (error) {
    next(error);
  }
});

function isValidUsername(username: string) {
  return username.match(/^(?!.*\.\.)(?!.*\.$)[a-zA-Z0-9_.]{2,32}$/);
}

export default router;
