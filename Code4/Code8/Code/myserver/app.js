const http = require("http");

function serveStaticFile(url, response){
    const fs = require('fs');
    const path = require('path');
    console.log('Dir name is ',__dirname);
   
    const fullPath = path.join(__dirname,'public/'+url);
    console.log('JOin ', fullPath);
    const stream = fs.createReadStream(fullPath);
   /* stream.on('data',chunk=>{
        response.write(chunk);
    })
    stream.on('end',()=>{
        response.end();
    })*/
    stream.pipe(response);
    /*fs.readFile(fullPath,(err,content)=>{
        if(err){
            response.write('File Not Found...');
        }
        else{
            response.write(content);
        }
        response.end();
    })*/
}
function isStatic(file){
    const extensions = ['.html','.png','.jpeg','.jpg','.css','.js'];
    const path = require("path");
    var ext = path.extname(file);
    return extensions.indexOf(ext)>=0;
}

// function handleReqRes(request,response){

// response.write("Hello Client I am Server");
// response.end();
// }
//const server = http.createServer(handleReqRes);
var counter = 0;
const server = http.createServer((request, response)=>{
    console.log("******Req is ",request.url, " Method ",request.method);
    var url = request.url;  //  '/'
    
    var method = request.method;  //GET
    if(url=='/exist' && method=='POST'){
        let data = '';
        request.on('data',(chunk)=>{
            data +=chunk;
        })
        request.on('end',()=>{
            console.log('Data is ',data);
           let obj = JSON.parse(data);
            var userid = obj.uid;
            const isExist = require("./logic");
            if(isExist(userid)){
                response.write('Userid is Exist');
            }
            else{
                response.write('this user is not exist');
            }
            //console.log('Userid is '+obj.query.uid);
            response.end();
        })
       
}
else
    if(url.startsWith('/exist') && method=='GET'){
            const urlObj = require('url');
            var obj = urlObj.parse(url,true);
            var userid = obj.query.uid;
            const isExist = require("./logic");
            if(isExist(userid)){
                response.write('Userid is Exist');
            }
            else{
                response.write('this user is not exist');
            }
            console.log('Userid is '+obj.query.uid);
            response.end();
    }
    else
    if(url=='/auth' && method=='POST'){
        let data = '';
        console.log('Inside Auth ');
        request.on('data',(chunk)=>{
            data +=chunk;
        })
        request.on('end',()=>{
            console.log('Data is ',data);
            const qs = require('querystring');
            var obj = qs.parse(data);
            if(obj.uid==obj.password){
                response.write('Welcome '+obj.uid);
            }
            else{
                response.write('Invalid Userid or Password');
            }
            response.end();
        })
        //response.write('Inside Post ');
      //  response.end();
    }
    else
    if(url.startsWith('/auth') && method=='GET'){
        const urlObj = require('url');
        const obj = urlObj.parse(url,true);
        if(obj.query.uid == obj.query.password){
            response.write('Welcome '+obj.query.uid);
        }
        else{
            response.write('Invalid Userid or Password');
        }
        //response.write('Inside Auth');
        response.end();
    }
    else
    if(url =='/login' && method == 'GET'){
        response.write('<h1>Login Page</h1>');
        response.end();
    }
    else
    if(url=='/' && method=='GET')
    {
        
       serveStaticFile('/index.html',response);
        
    }
    else
    if(isStatic(url)){
        serveStaticFile(url,response);
    }
    else{
        response.write('Something went Wrong...');
        response.end();
    }
    
})
server.listen(process.env.PORT || 1234,(err)=>{
    console.log("i am Process ",process);
if(err){
    console.log("Can't Start the Server",err);
}
else{
    console.log("Server Start....");
}
})