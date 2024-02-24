import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environmental variables from .env file
dotenv.config();

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI; // Retrieve MongoDB URI from environmental variables
        if (!uri) {
            throw new Error("MongoDB URI is not defined in the environment variables.");
        }
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); 
    }
}

export default connectDB;
