const ProductModel = require('../models/product');
const appCodes = require('../../utils/appcodes');
const logger = require("../../utils/logger");
const encryptOperations = require("../../utils/encrypt");
const productOperations = {


add(productObject,response){
    logger.debug('Inside ProductCRUD Add '+JSON.stringify(productObject));
   
    ProductModel.create(productObject,(err)=>{
    if(err){
        console.log('Error in Record Add');
        logger.error('Inside UserCRUD Add '+err);
        response.status(appCodes.SERVER_ERROR).json({status:appCodes.ERROR,message:'Record Not Added Due to Error'});
    }
    else{
        console.log('Record Added..');
        logger.debug('Record Added Sending Response');
        response.status(appCodes.OK).json({status:appCodes.SUCCESS,message:'Product Added'});
    }
})
},
delete(){

},
search(price,response){
    
ProductModel.find({"price":{$gt:price}},(err,docs)=>{
    if(err){
         response.status(500).json({status:'E',message:'Error in DB During Find Operation'});
    }
    else{
        if(docs){
           
             response.status(200).json({status:appCodes.SUCCESS,products:docs});
           
        }
        else{
            response.status(appCodes.RESOURCE_NOT_FOUND).json({status:appCodes.FAIL,message:'No Record Found '});
        }
    }
})
},
update(){

}
}
module.exports = productOperations;
//userOperations.add({userid:'amit',password:'abcd123'});