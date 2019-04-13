const connection = require('../connection');
const Schema = connection.Schema;
//const r = new Schema({});
const userSchema = new Schema({
    'userid':{type:String, required:true, unique:true},
    'password':{type:String, required:true,default:'ABCD'}
    //,address:{},orders:Array}
});
const UserModel = connection.model('users',userSchema);
module.exports = UserModel;