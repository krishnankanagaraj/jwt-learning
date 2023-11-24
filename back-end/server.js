const express = require('express');
const jwt =require('jsonwebtoken')
const mongoose = require('mongoose');
const bcrypt =require('bcrypt');
const coookieParser=require('cookie-parser');
const cors=require('cors')
const UserModel = require('./models/userModel')
const bodyParser=require('body-parser')

mongoose.connect('mongodb://127.0.0.1:27017/posts')

const app=express()

app.use(express.json());
app.use(bodyParser())
app.use(cors());
app.use(coookieParser())
// register new user
app.post('/register',(req,res)=>{
    console.log(req.body)
   const {name,email,password}=req.body
   console.log(name,email,password)
   bcrypt.hash(password,10).then(hash=>{
    UserModel.create({name,email,password:hash}).then(user=>res.json({status:"ok"})).catch(err=>res.json(err))
   }).catch(err=>res.json(err))


})



// app.get('/',(req,res)=>{
//     const data = UserModel.find({})
//     res.send(data)
// })
app.listen(3001,()=>{
    console.log('server started at port 3001')
})