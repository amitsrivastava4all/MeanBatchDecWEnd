const connection = require('../connection');
const Schema = connection.Schema;
//const r = new Schema({});
const productSchema = new Schema({
    'id':{type:Number, required:true, unique:true},
    'name':{type:String, required:true},
    'price':{type:Number},
    'url':{type:String}
    //,address:{},orders:Array}
});
const ProductModel = connection.model('prods',productSchema);
module.exports = ProductModel;