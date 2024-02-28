import express from "express";
import { login,    
    registerUser } from "../Controllers/UserController.js";
import { userVerification } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post('/login', login);
router.post('/signup', registerUser);
router.post('/', userVerification);

export default router;