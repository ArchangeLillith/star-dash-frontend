import { Router } from 'express';
import {
  getManagerEvents,
  getManagerSettings,
} from 'server/controllers/protected/managers.controller';
const router = Router();

export default router;

// GET /api/managers return event data
router.get(`/events/:id`, getManagerEvents);
router.get(`/settings/:id`, getManagerSettings);
