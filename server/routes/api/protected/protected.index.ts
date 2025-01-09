import { Router } from 'express';

import managerRouter from './managers.route';
import leadManagerRouter from './lead-managers.route';
import runsRouter from './runs.route';
import { verifyToken } from 'server/middlewares/verifyToken.mw';
const router = Router();

//Run all these routes prepended with the method through this middle ware to ensure that the token is valid
//We don't need to check and see if the user exists because the token is only created if the user exists
router.route('*').post(verifyToken).put(verifyToken).delete(verifyToken);

router.use('/lead-manager', leadManagerRouter);
router.use('/managers', managerRouter);
router.use('/runs', runsRouter);

export default router;
