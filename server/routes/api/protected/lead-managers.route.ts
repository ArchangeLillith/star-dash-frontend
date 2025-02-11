import { Router } from 'express';
import {
  checkLeadManagerStatus,
  writeLeadManager,
} from 'server/controllers/protected/managers.controller';

//ROUTE:
//api/protected/lead
const router = Router();

//GET
router.get('/');
router.get(`/:id`, checkLeadManagerStatus);
//PUT
router.post(`/:id`, writeLeadManager);

export default router;
