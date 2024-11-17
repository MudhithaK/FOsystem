const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({
    name: String,
    password:String,
    email: String
})


const RegisterModel = mongoose.model("registerf", RegisterSchema);
module.exports = RegisterModel;