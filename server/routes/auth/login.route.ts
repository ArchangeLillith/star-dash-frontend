import { Router } from 'express';

import { handleLogin } from '../../middlewares/handleLogin.mw';
import { createJWT } from '../../utils/tokens';

const router = Router();

// POST /auth/login
router.post('/', handleLogin, (req, res, next) => {
  if (!req.currentUser) throw new Error('no user');
  try {
    const token = createJWT(req.currentUser.id);
    res.json(token);
  } catch (error) {
    next(error);
  }
});

export default router;
