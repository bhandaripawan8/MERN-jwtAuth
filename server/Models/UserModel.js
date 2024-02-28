import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
    email: {
        type: String, 
        required: [true, 'Your email is required'],
        unique: true
    },
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
});
userSchema.pre('save', async function (){
    this.password = await bcrypt.hash(this.password, 12)
});

export default mongoose.model('User', userSchema);