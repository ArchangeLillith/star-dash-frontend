import { Router } from 'express';

import apiRouter from './api/index';
import authRouter from './auth/index';

const router = Router();

router.use('/api', apiRouter);
router.use('/auth', authRouter);

export default router;
