import express from 'express'
import dotenv from 'dotenv'

import AppRouter from './routes/route.js'
import connectDB from './config/db.js'

dotenv.config()

const app = express()
dotenv.config()
connectDB()

app.use(express.json())

app.use("/",AppRouter)
app.listen(3000, ()=>{
    console.log("Server is listening on port 3000")
})