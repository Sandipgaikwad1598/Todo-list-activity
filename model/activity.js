const mongoose=require("mongoose")

const activitySchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    activity:{
        type:String,
        require:true
    },
    status:{
        type:String,
        // default:Pending,
    },
    time:{
        type:String
    },
    Action:{
        type:String,
        // default:Start
    }
})

const activityModel=mongoose.model("activitys",activitySchema)

module.exports=activityModel