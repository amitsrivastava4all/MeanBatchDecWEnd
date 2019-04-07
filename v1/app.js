const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.set('view engine','ejs');
//app.set('views',__dirname+'/templates');
app.use('/api',require('./api/userapi'));
app.use('/',require('./routes/user/user'));
app.use('/admin',require('./routes/user/admin'));
//app.use('/order',require('./routes/orders/order'));
// request.body = {}

app.use((req,res)=>{
    res.send('U Have Type Something Wrong...');
})
console.log('App ',typeof app, 'Express ',typeof express);
app.listen(process.env.PORT || 1234,(err)=>{
    if(err){
        throw err;
    }
    else{
    console.log('Server Start');
    }
})