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
app.use(cors({
    origin: [
      'http://127.0.0.1:5173',
      'http://127.0.0.1:5173/login',
      'http://127.0.0.1:5173/register'
    ],
    methods: ['POST', 'GET', 'PUT', 'DELETE', 'PATCH'],
    credentials: true
  }));
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
app.post('/login',(req,res)=>{
    const {email,password}=req.body
    UserModel.findOne({email:email}).then(user=>{
        if(user){
            console.log(user)
            bcrypt.compare(password,user.password,(err,response)=>{
                if(response){
                    console.log(response)
                    const token =jwt.sign({email:user.email,role:user.role},"krrish@2105",{expiresIn:'1d'})
                    res.cookie('token',token,{ sameSite: 'none', secure: true })
                    console.log(token)
                    return res.json('success')
                }
                else{
                    return res.json('Password is not valid')
                }
            })
        }
        else{
            return res.json("User not exists")
        }
    })
})



// app.get('/',(req,res)=>{
//     const data = UserModel.find({})
//     res.send(data)
// })
app.listen(3001,()=>{
    console.log('server started at port 3001')
})