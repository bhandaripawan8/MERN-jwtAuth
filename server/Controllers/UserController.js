// desc auth user/set token
// route POST /api/users/auth
import expressAsyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";
import createdSecretToken from '../utils/SecretToken.js';
// this helps us from using try catches 

const login = expressAsyncHandler(async (req, res) =>{
    res.status(200).json({message: 'Auth User'})
})

// register new user
const registerUser = expressAsyncHandler(async (req, res, next) =>{
    const {email, password, username, createdAt} = req.body;
    const existingUser = await User.findone({email});
    if(existingUser){
        return res.json({message: 'User already exist'})
    } 
    const user = await User.create({email, password, username, createdAt});
    const token = createdSecretToken(user._id);
    res.cookie('token', token, {
        withCredentials: true,
        httpOnly: false,
    });
    res.status(201).json({message: 'User Created Successfully', success: true, user})
    next()
});



export {
    login,
    registerUser
}
