const express = require('express');
const adminRoute = express.Router();
adminRoute.get('/adminuser',(req,res)=>{
    res.send('Admin User Page');
})
adminRoute.get('/login',(req,res)=>{
    res.send('Admin Login Page');
})
module.exports = adminRoute;