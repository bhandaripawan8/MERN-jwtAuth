// desc auth user/set token
// route POST /api/users/auth
import expressAsyncHandler from "express-async-handler";
// this helps us from using try catches 

const authUser = expressAsyncHandler(async (req, res) =>{
    res.status(200).json({message: 'Auth User'})
})

// register new user
const registerUser = expressAsyncHandler(async (req, res) =>{
    res.status(200).json({message: 'Register User'})
})

// logout
const logoutUserProfile = expressAsyncHandler(async (req, res) =>{
    res.status(200).json({message: 'logout User'})
})

// get user profile
const getUserProfile = expressAsyncHandler(async (req, res) =>{
    res.status(200).json({message: 'User profile'})
})

// update user profile
const updateUserProfile = expressAsyncHandler(async (req, res) =>{
    res.status(200).json({message: 'update User profile'})
})

export {
    authUser,
    registerUser,
    logoutUserProfile,
    getUserProfile,
    updateUserProfile
}
