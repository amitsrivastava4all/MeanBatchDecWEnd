const UserModel = require('../models/user');
const appCodes = require('../../utils/appcodes');
const userOperations = {


add(userObject,response){
UserModel.create(userObject,(err)=>{
    if(err){
        console.log('Error in Record Add');
        response.status(appCodes.SERVER_ERROR).json({status:appCodes.ERROR,message:'Record Not Added Due to Error'});
    }
    else{
        console.log('Record Added..');
        response.status(appCodes.OK).json({status:appCodes.SUCCESS,message:'Record Added'});
    }
})
},
delete(){

},
search(userObject,response){
UserModel.findOne(userObject,(err,doc)=>{
    if(err){
         response.status(500).json({status:'E',message:'Error in DB During Find Operation'});
    }
    else{
        if(doc){
             response.status(200).json({status:appCodes.SUCCESS,message:'Welcome '+doc.userid});
        }
        else{
            response.status(appCodes.RESOURCE_NOT_FOUND).json({status:appCodes.FAIL,message:'Invalid Userid or Password '});
        }
    }
})
},
update(){

}
}
module.exports = userOperations;
//userOperations.add({userid:'amit',password:'abcd123'});