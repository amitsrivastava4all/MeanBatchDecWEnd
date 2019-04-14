const express = require('express');
const productRoute = express.Router();
const logger = require('../utils/logger');
productRoute.post('/addproduct',(request, response)=>{
    const json = request.body;
    logger.debug('Inside DoPost of UserAPI Register '+request.body);
    const productcrud = require('../db/helpers/productcrud');
    productcrud.add(json,response);
})
productRoute.get('/searchproduct',(request, response)=>{
    const price = request.query.price;
    const productcrud = require('../db/helpers/productcrud');
    productcrud.search(price, response);

})

module.exports = productRoute;