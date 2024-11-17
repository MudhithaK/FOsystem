const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({
    name: String,
    password:String
})

const RegiterModel = mongoose.model("register", RegisterSchema);
module.exports = RegiterModel;