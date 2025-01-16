import { Router } from 'express';
import { createNewRun } from 'server/controllers/protected/runs.controller';

const router = Router();

// GET /api/runs
router.get('/');
router.post('/', createNewRun);

export default router;
