const UserModel = require('../models/user');
const appCodes = require('../../utils/appcodes');
const logger = require("../../utils/logger");
const encryptOperations = require("../../utils/encrypt");
const userOperations = {


add(userObject,response){
    logger.debug('Inside UserCRUD Add '+userObject);
    userObject.password = encryptOperations.encryptPassword(userObject.password);
UserModel.create(userObject,(err)=>{
    if(err){
        console.log('Error in Record Add');
        logger.error('Inside UserCRUD Add '+err);
        response.status(appCodes.SERVER_ERROR).json({status:appCodes.ERROR,message:'Record Not Added Due to Error'});
    }
    else{
        console.log('Record Added..');
        logger.debug('Record Added Sending Response');
        response.status(appCodes.OK).json({status:appCodes.SUCCESS,message:'Record Added'});
    }
})
},
delete(){

},
search(userObject,response){
    // UserModel.find(userObject,(err,docs)=>{

    // })
UserModel.findOne({"userid":userObject.userid},(err,doc)=>{
    if(err){
         response.status(500).json({status:'E',message:'Error in DB During Find Operation'});
    }
    else{
        if(doc){
            if(encryptOperations.compareHash(userObject.password,doc.password)){
             response.status(200).json({status:appCodes.SUCCESS,message:'Welcome '+doc.userid,'record':doc});
            }
            else{
                response.status(appCodes.RESOURCE_NOT_FOUND).json({status:appCodes.FAIL,message:'Invalid Userid or Password '});
            }
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