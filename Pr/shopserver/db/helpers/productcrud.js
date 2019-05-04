const ProductModel = require('../models/productmodel');
const productOperations = {
    add(response){
        const products = [{"id":1001,"name":"Apple","price":90000,"quantity":100, "url":"https://d1ic4altzx8ueg.cloudfront.net/niche-builder/5b21eb35edbf8.png"},{"id":1002,"name":"Samsung","price":60000,"quantity":200, "url":"https://d1ic4altzx8ueg.cloudfront.net/niche-builder/5b21e91f89d76.png"}];
        ProductModel.insertMany(products,(err)=>{
            if(err){
                    response.status(500).json({'message':'Error During Add'});
            }
            else{
                response.status(500).json({'message':'Add SuccessFully'});
            }
        })
    },
    fetch(response){
        ProductModel.find({},(err,docs)=>{
            if(docs){
            response.status(200).json({'products':docs});
            }
            else{
                response.status(404).json({'products':[]});
            }
        })
    }
}
module.exports = productOperations;