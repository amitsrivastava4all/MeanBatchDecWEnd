const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const userSchema = new Schema({username:String, googleId:String,pic:String, email:String,roleid:Number});
const User =mongoose.model("users",userSchema);
module.exports  = User;