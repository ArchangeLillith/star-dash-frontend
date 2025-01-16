import { Router } from 'express';
import { createRunner } from 'server/controllers/protected/runners.controller';
const router = Router();

export default router;

// GET /api/runner
router.post('/', createRunner);
