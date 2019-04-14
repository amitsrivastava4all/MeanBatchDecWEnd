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
       const itemsArr = [
           {id:1001, name:'Nokia',price:9000,url:'https://www.lg.com/levant_en/images/mobile-phones/MD05856575/G6-image350-n.jpg'},
           {id:1002, name:'LG',price:19000,url:'https://www.lg.com/levant_en/images/mobile-phones/MD05856575/G6-image350-n.jpg'},
           {id:1003, name:'Apple',price:29000,url:'https://www.91-img.com/pictures/apple-iphone-6s-mobile-phone-large-1.jpg'},
           {id:1004, name:'MI',price:6000,url:'https://www.91-img.com/pictures/apple-iphone-6s-mobile-phone-large-1.jpg'}

        ];
       res.render('dashboard',{uid:userid,items:itemsArr})
       // res.redirect("/admin/login");
        //res.send('Welcome '+userid);
    }
    else{
        res.send('Invalid Userid or Password');
    }
});
module.exports = userRoute;