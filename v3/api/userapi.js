const express = require('express');
const userRoute = express.Router();
const logger = require('../utils/logger');
userRoute.post('/register',(request, response)=>{
    const json = request.body;
    logger.debug('Inside DoPost of UserAPI Register '+request.body);
    const usercrud = require('../db/helpers/usercrud');
    usercrud.add(json,response);
})
userRoute.post('/login',(request, response)=>{
    const json = request.body;
    const usercrud = require('../db/helpers/usercrud');
    usercrud.search(json, response);

})
userRoute.get('/profile',(request, response)=>{
    
})
module.exports = userRoute;