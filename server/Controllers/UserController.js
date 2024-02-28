// desc auth user/set token
// route POST /api/users/auth
import expressAsyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";
import { createSecretToken } from '../utils/SecretToken.js';

// Middleware to handle login
const login = expressAsyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Auth User' });
});

// Middleware to register a new user
const registerUser = expressAsyncHandler(async (req, res, next) => {
    const { email, password, username, createdAt } = req.body;
    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: 'User already exists' });
        }

        // Create a new user
        const user = await User.create({ email, password, username, createdAt });

        // Create a JWT token for the user
        const token = createSecretToken(user._id);

        // Set the token as a cookie
        res.cookie('token', token, {
            httpOnly: true, // Set httpOnly to true for security reasons
            // withCredentials: true, // You can add this line if you are using CORS and credentials are required
        });

        // Send success response
        res.status(201).json({ message: 'User Created Successfully', success: true, user });
        // console.log(res.message);
    } catch (error) {
        // Call next with the error to pass it to the error handling middleware
        next(error);
    }
});

export {
    login,
    registerUser
};
