const express = require("express");
const passport = require("passport");
const routes = express.Router();
const User = require("../db/models/userschema");
routes.get('/google',passport.authenticate('google',{scope:['profile','email']}));

routes.get('/dashboard',passport.authenticate('google'),(req,res)=>{
    console.log("Request ",req);
    let mail = require("../utils/mail");
    mail('Account Created','Account has been created Successfully',req.user.email,res,req,req.user.username);
    
    //res.render('dashboard',{name:req.user.username, image:req.user.pic, email:req.user.email});
    //res.send('Welcome User '+req.user.username);
});

routes.get('/maindashboard',(req,res)=>{
    res.send('I am on Dashboard Page '+req.session.user);
})

module.exports=  routes;
