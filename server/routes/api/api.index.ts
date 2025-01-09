import { Router } from 'express';

import eventsRouter from './events.route';
import protectedRouter from './protected/protected.index';

//Run all these routes prepended with the method through this middle ware
// router.route('*').post(checkToken).put(checkToken).delete(checkToken);

const router = Router();

router.use('/events', eventsRouter);
router.use('/protected', protectedRouter);

export default router;
