const express= require("express")
const mongoose = require('mongoose')
const cors= require("cors")
const RegisterModel= require('./models/Register')

const app= express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/FOtest1",{useNewUrlParser:true, useUnifiedTopology: true})
.then(()=>console.log('Connected '))
.catch(err=> console.error('error',err));

app.post('/register',(req,res)=>{
    RegisterModel.create(req,res)
    .then(registerf=> res.json(registerf))
    .catch(err=> res.json(err))

});

app.listen(3001,()=> {
    console.log("Server is running");
   
});