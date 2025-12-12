import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        index:true
    }
},
{timestamps:true})




export const User= mongoose.model("User",userSchema)