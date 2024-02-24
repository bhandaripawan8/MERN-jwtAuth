
import express from "express";
import { authUser,    
    registerUser,
    logoutUserProfile,
    getUserProfile,
    updateUserProfile } from "../Controllers/UserController.js";
const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUserProfile);
router.route('/profile').get(getUserProfile).put(updateUserProfile);


export default router;