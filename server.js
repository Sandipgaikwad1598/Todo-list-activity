const express=require("express")
const mongoose=require("mongoose")
const userController=require("./routes/user")
const listController=require("./routes/list")
const dotenv = require('dotenv');
const cors=require("cors")

const app=express()
dotenv.config();
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())




mongoose.connect("mongodb://localhost/Todo",()=>{
    console.log("connected to DB")
})



app.use("/user",userController)
app.use("/list",listController)

app.listen(3001,()=>{
    console.log("server started")
})