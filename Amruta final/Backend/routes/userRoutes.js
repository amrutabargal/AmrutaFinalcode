import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getProfile, editProfile } from "../controllers/userController.js";

const router = express.Router();

router.get("/me", protect, getProfile);
router.put("/update", protect, editProfile);

export default router;
