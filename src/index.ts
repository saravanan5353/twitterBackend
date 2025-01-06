import { error } from "console";
import express from "express";
import userRoutes from './routes/userRoutes'
import tweetRoute from './routes/tweetRoutes'

const app=express();
app.use(express.json());
app.use('/user',userRoutes);
app.use('/tweet',tweetRoute);
app.get('/',(req,res)=>{
 res.send('Twitter Backend test ');
});
// app.Method (Path,Handler)
app.get('/test',(req,res)=>{
    res.send('checking path')
});

app.listen(3000,()=>{
    console.log("server_ready")
});

