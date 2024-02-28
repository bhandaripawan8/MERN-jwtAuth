
import express from "express";
import { login,    
    registerUser } from "../Controllers/UserController.js";
const router = express.Router();

router.post('/login', login);
router.post('/signup', registerUser);

export default router;