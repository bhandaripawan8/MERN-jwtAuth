
import express from 'express';
import userRoute from './Routes/UserRoutes.js'
import dotenv from 'dotenv';
// import { notFound, errorHandler } from './middleware/ErrorMiddleware.js';
import connectDB from './Config/db.js'
import bodyParser from 'body-parser';

connectDB();

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use('/api/', userRoute)
app.use(express.json());
app.use(express.urlencoded({extened: true}))
app.use('/', (req, res) =>{
    // res.send('server is ready') 
})

// app.use(notFound)
// app.use(errorHandler);

app.listen(port, () =>console.log(`Listening to port ${port}`))