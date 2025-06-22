import express from "express"
import  cors from 'cors'
import authRouter from './routes/auth.js'
import noteRouter from './routes/Note.js'
import connectToMongoDB from './db/db.js'

const port=5000;
const app=express()
app.use(cors())
app.use(express.json())
app.use('/api/auth',authRouter)
app.use('/api/note',noteRouter)

app.listen(port,()=>{
    console.log(`server is running at port: ${port}`);
})