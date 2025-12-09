import express from "express";
import { createNexus, getMyNexus, getPublicNexus, getNexusById, updateNexus, deleteNexus } from "../controllers/nexusController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


router.post('/', protect, createNexus);       // POST /api/nexus
router.get('/my', protect, getMyNexus);       // GET /api/nexus/my
router.get('/public', getPublicNexus);     // GET /api/nexus/public
router.get('/:id', protect, getNexusById);    // GET /api/nexus/:id
router.put('/:id', protect, updateNexus);     // PUT /api/nexus/:id
router.delete('/:id', protect, deleteNexus);  // DELETE /api/nexus/:id

export default router;
