const connection = require('../connection');
const Schema = connection.Schema;
const ProductSchema = new Schema({
    id:Number,name:String, price:Number, quantity:Number, url:String
})
const Product = connection.model('products',ProductSchema);
module.exports = Product;