import { Router } from 'express';

import apiRouter from './api/api.index';
import authRouter from './auth/auth.index';

const router = Router();

router.use('/api', apiRouter);
router.use('/auth', authRouter);

export default router;
