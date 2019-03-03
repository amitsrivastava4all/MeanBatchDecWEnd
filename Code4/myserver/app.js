const http = require("http");

function isStatic(){

}

// function handleReqRes(request,response){

// response.write("Hello Client I am Server");
// response.end();
// }
//const server = http.createServer(handleReqRes);
var counter = 0;
const server = http.createServer((request, response)=>{
    console.log("Req is ",request.url, " Method ",request.method);
    var url = request.url;
    
    var method = request.method;
    if(url =='/login' && method == 'GET'){
        response.write('<h1>Login Page</h1>');
        response.end();
    }
    else
    if(url=='/')
    {
        const fs = require('fs');
        const path = require('path');
        console.log('Dir name is ',__dirname);
       
        const fullPath = path.join(__dirname,'public/index.html');
        console.log('JOin ', fullPath);
   
        fs.readFile(fullPath,(err,content)=>{
            if(err){
                response.write('File Not Found...');
            }
            else{
                response.write(content);
            }
            response.end();
        })
       // counter++;
        //response.write("Hello Client I am Server "+counter);
    }
    else{
        response.write('Something went Wrong...');
        response.end();
    }
    
})
server.listen(1234,(err)=>{
if(err){
    console.log("Can't Start the Server",err);
}
else{
    console.log("Server Start....");
}
})