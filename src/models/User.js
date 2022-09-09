//2. Define Schema
const { mongoose } = require('../config/db')

//Registration Route Admin,Teacher, Students

//All users like admin,teacher and student will be inside users collection

//let object = new object.ClassName();
let userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password_hash:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["admin","teacher","student"],
        default:"student"
    }

},{
    timestamps:true
});

const User = mongoose.model('User', userSchema);


module.exports = { User,mongoose }