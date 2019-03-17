const express = require('express');
const app = express();
app.use(express.static('public'));
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