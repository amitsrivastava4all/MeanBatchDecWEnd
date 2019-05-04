const express = require('express');
const routes = express.Router();
const productOperations = require("../db/helpers/productcrud");
routes.get('/products',(request ,response)=>{
    productOperations.fetch(response);
})
routes.get('/addproducts',(request ,response)=>{
    productOperations.add(response);
})
module.exports = routes;