const express = require("express");
const app = express();
app.use(express.static('public'));
app.get('/livescore',(req,res)=>{
const fs = require('fs');
const path = require('path');
let fullPath = path.join(__dirname,'score.txt');
console.log('File path is ',fullPath);
res.writeHead(200, {
    'content-type' : 'text/event-stream',
    'connection' : 'keep-alive',
    'Access-Control-Allow-Origin' : '*'
});
fs.watchFile(fullPath,()=>{
    
    var content = fs.readFileSync(fullPath);
    console.log('File Content is '+content);
   
    
   
    res.write('event: letdoservertalk\n');
    res.write('data: Score Updated ' +content+ '\n\n');
    //res.end();

})
})
app.listen(1234,()=>{
    console.log('Server Start');
})