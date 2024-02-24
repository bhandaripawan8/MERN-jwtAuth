
import express from 'express';
import userRoute from './Routes/UserRoutes.js'
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/ErrorMiddleware.js';
import connectDB from './Config/db.js'

connectDB();

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use('/api/users', userRoute)

app.use('/', (req, res) =>{
    res.send('server is ready')
})

app.use(notFound)
app.use(errorHandler);

app.listen(port, () =>console.log(`Listening to port ${port}`))