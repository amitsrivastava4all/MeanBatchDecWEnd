const mongoose = require('../connection');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    'userid':{type:String,required:true, unique:true},
    'password':{type:String,required:true}
})
const UserModel = mongoose.model('users',UserSchema);
module.exports = UserModel;