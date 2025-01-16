import { Router } from 'express';
import { createTeam } from 'server/controllers/protected/teams.controller';
const router = Router();

export default router;

// GET /api/runner
router.post('/', createTeam);
