import { Router } from 'express';
import { eventsController } from '../../controllers/events/events.controller';
const router = Router();

export default router;

// GET /api/events return event data
router.get('/', eventsController);
