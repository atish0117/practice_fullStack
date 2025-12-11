import express from "express";
import dotenv from "dotenv";
import dbConnect from "./db/dbConnect.js"
dotenv.config()

const PORT =process.env.PORT || 8000

const app =express();

dbConnect().then(()=>{

    app.listen(PORT,()=>{
            console.log(`server running on port${PORT}`)
    })

}).catch((error)=>{
    console.log("mongoDb connection failed ",error)
}
)

