//REFACTOR we should redo our routes later to match this, like seperating the get and put, addnig the routes to the file so we know where we are
import { Router } from 'express';
import {
  getManagerEvents,
  getManagerSettings,
  updateManagerSettings,
} from 'server/controllers/protected/managers.controller';
//ROUTE:
//api/protected/managers
const router = Router();

// GET
router.get(`/events/:id`, getManagerEvents);
router.get(`/settings/:id`, getManagerSettings);
//PUT
router.put(`/settings/:id`, updateManagerSettings);

export default router;
