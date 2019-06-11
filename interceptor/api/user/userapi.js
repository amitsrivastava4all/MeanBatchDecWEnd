const express = require('express');
const router = express.Router();
const userOperations = require('../../db/helpers/userOperations');
router.post('/register',(request, response)=>{
    var userid = request.body.userid;
    var pwd = request.body.password;
    const userObject = {'userid':userid,'password':pwd};
    userOperations.add(userObject,response);

})
router.post('/login',(request, response)=>{
    var userid = request.body.userid;
    var pwd = request.body.password;
    const userObject = {'userid':userid,'password':pwd};
    userOperations.find(userObject,response);

})
module.exports = router;