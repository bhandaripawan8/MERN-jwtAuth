
import express from "express";
import { login,    
    registerUser } from "../Controllers/UserController.js";
const router = express.Router();

router.post('/', login);
router.post('/auth', registerUser);

export default router;