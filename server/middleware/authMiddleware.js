// Import packages
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../Models/UserModel.js';

// Load environment variables
dotenv.config();

// User verification middleware
const userVerification = async (req, res, next) => {
    try {
        const token = req.cookies;
        console.log(token);
        if (!token) {
            return res.json({ status: false });
        }
        jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
            if (err) {
                return res.json({ status: false });
            }
            try {
                const user = await User.findById(data.id);
                if (user) {
                    return res.json({ status: true, user: user.username });
                } else {
                    return res.json({ status: false });
                }
            } catch (error) {
                console.log(error);
                next(error);
            }
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export { userVerification };
