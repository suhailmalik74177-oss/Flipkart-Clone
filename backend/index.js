import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { connectDB } from './config/db.js'
import userRouter from './routes/route.js'

const app = express()

app.use(express.json())


app.use(cors({
    credentials:true,
    origin:process.env.FRONTEND_URL,
}))

app.use('/api', userRouter);

connectDB().then(()=>{
app.listen(process.env.PORT, ()=>{
    console.log("This is Port 3000");
})
})
