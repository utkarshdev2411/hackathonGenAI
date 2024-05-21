import mongoose from "mongoose";

const userScehma=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    booking:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'book'
        }
    ],
})


const userModel=mongoose.model('user',userScehma);

export default userModel;