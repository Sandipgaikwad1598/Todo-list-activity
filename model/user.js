const mongoose =require("mongoose")

const userSchema=new mongoose.Schema({
    username:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String
    }
})

const userModel=mongoose.model("userdetails",userSchema)

module.exports=userModel