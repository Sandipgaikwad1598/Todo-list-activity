const express=require("express")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const userModel=require("../model/user")


const route=express.Router()

route.post("/register",(req,res)=>{
    const salt=10
    bcrypt.genSalt(salt).then((hashsalt)=>{
        bcrypt.hash(req.body.password,hashsalt).then((passwordhash)=>{
            userModel.create({
                username:req.body.username,
                password:passwordhash
            }).then(()=>{
                res.status(200).send(req.body.username)
            }).catch((err)=>{
                res.status(403).send(err.message)
            })
        })
    })
})

route.post("/login",(req,res)=>{
    userModel.find({username:req.body.username}).then((userdata)=>{
        if(userdata.length){
            bcrypt.compare(req.body.password,userdata[0].password).then((val)=>{
                if(val){
                    const authToken=jwt.sign(userdata[0].username,process.env.SECRET_KEY)
                    const user=userdata[0].username
                    res.status(200).send({authToken,user})
                }
                else{
                    res.status(400).send("invalid Password")
                }
            })
        }else{
            res.status(401).send("unauthorized user")
        }
    })
})

module.exports=route