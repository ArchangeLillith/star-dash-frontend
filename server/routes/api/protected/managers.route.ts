import { Router } from 'express';
import {
  checkLeadManagerStatus,
  getManagerEvents,
  getManagerSettings,
  updateManagerSettings,
} from 'server/controllers/protected/managers.controller';

const router = Router();

// GET /api/managers return event data
router.get(`/events/:id`, getManagerEvents);
router.get(`/settings/:id`, getManagerSettings);
router.get(`/lead/:id`, checkLeadManagerStatus);
router.put(`/settings/:id`, updateManagerSettings);

export default router;
