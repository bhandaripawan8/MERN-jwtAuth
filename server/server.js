
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use('/', (req, res) =>{
    res.send('server is ready')
})

app.listen(port, () =>console.log(`Listening to port ${port}`))