// Backend/routes/spacesRoutes.js
import express from 'express';
import * as spacesCtrl from '../controllers/spacesController.js';
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post('/create', protect, spacesCtrl.createSpace);
router.get('/nexus/:nexusId', protect, spacesCtrl.listSpaces);
router.get('/:spaceId', protect, spacesCtrl.getSpace);
router.put('/:spaceId', protect, spacesCtrl.updateSpace);
router.delete('/:spaceId', protect, spacesCtrl.deleteSpace);

export default router;
