import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.router.js';
import dbConnect from './config/db.config.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import aiRouter from './routes/ai.router.js';
dotenv.config();


const app=express();
dbConnect();

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:"http://localhost:5173",credentials:true}));


app.use('/auth',authRouter);
app.use('/ai',aiRouter);

const PORT=process.env.PORT
console.log(PORT);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
