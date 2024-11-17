const express= require('express')
const mongoose = require('mongoose')
const cors= require('cors')
const RegiterModel= require('./models/Register')

const app= express()
app.use(cors())
app.use(express.json)

mongoose.connect("mongodb://localhost:27017/FOtest1");

app.post('/register',(req,res)=>{
    const {name,password}= req.body;
    RegiterModel.findOne({name:name})
    .then(user=>{
        if(user){
            res.json("Already exit")
        }else{
            RegisterModel.create({name: name,password: password})
            .then(result=> res.json("Account created"))
            .catch(err=> res.json(err))
        }
    }).catch(err=> res.json(err))


})

app.listen(3001,()=> {
    console.log("Server is running");
})