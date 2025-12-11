import mongoose from "mongoose"
import dotenv from "dotenv"
import {DB_NAME} from "../constants.js"
dotenv.config()
const dbConnect= async()=>{
    try{
        const connectDB = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n Mongodb connected successfully !! DB HOST:
             ${
            connectDB.connection.host
        }
        `);
    }catch(error){
            console.log("mongoDb connection failed", error)
            process.exit(1)
        }
}

export default dbConnect