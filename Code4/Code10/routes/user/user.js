const express = require('express');
const userRoute = express.Router();
userRoute.get('/login',(req,res)=>{
    console.log('Request is ',req);
    let userid = req.query.userid;
    let pwd = req.query.pwd;
    if(userid==pwd){
        res.send('Welcome '+userid);
    }
    else{
        res.send('Invalid Userid or Password');
    }
});
userRoute.post('/register',(req,res)=>{
    res.send('Register');
});
userRoute.post('/login',(req,res)=>{
    console.log('Request is ',req);
    let userid = req.body.userid;
    let pwd = req.body.pwd;
    if(userid==pwd){
       
        const path = require('path');
        var currentPath = path.normalize(__dirname+'/../..');
        const fullPath = path.join(currentPath,"public/dashboard.html");
        console.log(currentPath, " ",fullPath);
        //res.redirect('https://www.google.com/?id=567567');
       // res.json({'message':'Welcome User '+userid});
       // res.sendFile(fullPath);
       res.render('dashboard',{uid:userid})
       // res.redirect("/admin/login");
        //res.send('Welcome '+userid);
    }
    else{
        res.send('Invalid Userid or Password');
    }
});
module.exports = userRoute;