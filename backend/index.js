import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import AppRouter from './routes/route.js'
import connectDB from './config/db.js'

dotenv.config()

const app = express()

// const corsOptions = {
//     origin: (origin, callback) => {
//       // Allow requests with no origin (like mobile apps or curl requests)
//       if (!origin) return callback(null, true);
//       // Allow if origin starts with "http://localhost:3000"
//       if (origin.startsWith('http://localhost:5173')) {
//         return callback(null, true);
//       }
//       // Block other origins
//       return callback(new Error('Not allowed by CORS'));
//     },
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   };

// const corsOptions = {
//   origin : "http://localhost:5173"
// }

app.use(cors());


dotenv.config()
connectDB()

app.use(express.json())

app.use("/",AppRouter)
app.listen(5000, ()=>{
    console.log("Server is listening on port 5000")
})