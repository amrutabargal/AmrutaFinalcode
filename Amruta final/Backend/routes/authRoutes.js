import express from 'express';
import {
    signup,
    login,
    appleLogin
} from '../controllers/authController.js';

const router = express.Router();

//POST
router.post('/signup', signup);
router.post('/login', login);
// Apple Sign-In
router.post("/apple/signin", appleLogin);

export default router;
