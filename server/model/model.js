const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:String,
    status:String

})


const Userdb = new mongoose.model('Userdb',schema)
module.exports = Userdb