const express = require('express');
const app = express();
app.use(require('./utils/cors'));
app.use('/',require('./routes/productroutes'));
app.listen(process.env.PORT || 1234,(err)=>{
if(err){
    console.log('Error on Server Start ',err);
    throw err;
}
});