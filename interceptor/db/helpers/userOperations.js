const UserModel = require('../models/userschema');
const config = require('../../utils/config');
const userOperations = {
    add(userObject,response){
        UserModel.create(userObject,(err)=>{
               if(err){
                response.status(500).json({status:config.status.ERROR,message:'Error in User Creation Contact to System Admin'});
               } 
               else{
                response.status(200).json({status:config.status.SUCCESS,message:'User Registered SuccessFully'}); 
               }
        })
    },
    find(userObject, response){

        UserModel.findOne(userObject,(err,doc)=>{
            if(err){
                console.log('Find Error is ',err);
                response.status(500).json({status:config.status.ERROR,message:'Error in User Find Contact to System Admin'});
               }   
            else{
                if(doc){
                    const jwt = require('../../utils/token');
                    const token = jwt.generateToken(doc.userid)
                    response.status(200).json({token:token,status:config.status.SUCCESS,message:'User Login SuccessFully'}); 
                }
                else{
                    response.status(200).json({status:config.status.FAIL,message:'Invalid Userid or Password'}); 
                }
            }  
        })
    }
}
module.exports = userOperations;