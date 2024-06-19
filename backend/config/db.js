import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()


const db_user = process.env.DEV_DB_USER
const db_pass= process.env.DEV_DB_PASSWORD


const db_uri = `mongodb+srv://${db_user}:${db_pass}@dev-db-01.k0heshc.mongodb.net/todo-tasks?retryWrites=true&w=majority&appName=dev-db-01`

const connectDB = async () => {
    try{
        mongoose.connect(db_uri,{})
        console.log("Database connected Successfully")
    }
    catch(error){
        console.log("Error in Connecting DB")
    }
}

export default connectDB