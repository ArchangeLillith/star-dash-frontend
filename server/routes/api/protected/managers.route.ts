import { Router } from 'express';
import { getManagerEvents } from 'server/controllers/protected/managers.controller';
const router = Router();

export default router;

// GET /api/manager return event data
router.get(`/events/:id`, getManagerEvents);
