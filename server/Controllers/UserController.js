import expressAsyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";
import { createSecretToken } from '../utils/SecretToken.js';
import bcrypt from 'bcrypt';

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
            httpOnly: true,
        });
        // Send success response
        res.status(201).json({ message: 'User Created Successfully', success: true, user });
    } catch (error) {
        next(error);
    }
});

// login
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Incorrect email or password' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Incorrect email or password" });
        }
        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res.status(400).json({ message: 'Incorrect password' });
        }
        const token = createSecretToken(user._id);
        res.cookie('token', token, { withCredentials: true, httpOnly: true });
        res.status(200).json({ message: 'Login Successful' });
        next();
    } catch (error) {
        // Pass the error to the error handling middleware to not crash the server when credintials were inputted wrongly
        next(error);
    }
};


export {
    login,
    registerUser
};
