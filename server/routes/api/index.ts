import { Router } from 'express';

// import authorsRouter from './authors';

//Run all these routes prepended with the method through this middle ware
// router.route('*').post(checkToken).put(checkToken).delete(checkToken);

const router = Router();

// router.use('/authors', authorsRouter);

export default router;
