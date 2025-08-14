import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.router.js';
import dbConnect from './config/db.config.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import aiRouter from './routes/ai.router.js';
import path from 'path';
dotenv.config();


const app=express();
dbConnect();

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:"https://trip-planner-6z69.onrender.com",credentials:true}));

const __dirname = path.resolve();

app.use('/auth',authRouter);
app.use('/ai',aiRouter);

if(process.env.NODE_ENV==="production")
    {
        app.use(express.static(path.join(__dirname,"/Frontend/dist")))
        // app.use('*', (req, res) => {
        //     res.sendFile(path.join(__dirname, 'Frontend', 'dist', 'index.html'));
        // });
    }
    else
    {
        app.get('/',(req,res)=>{
            res.send("It running on Development mode...");
        });
    }
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
