const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const schemaObj=new Schema({
    name:String,
    email:String,
    password:String
},{timestamps:true});
const User=mongoose.model('users',schemaObj);
module.exports=User;