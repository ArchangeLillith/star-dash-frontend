import { Router } from 'express';

import registerRouter from './register.route';
import loginRouter from './login.route';
import validateRouter from './validate.route';

//Run all these routes prepended with the method through this middle ware
// router.route('*').post(checkToken).put(checkToken).delete(checkToken);

const router = Router();

router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/validate', validateRouter);

export default router;
