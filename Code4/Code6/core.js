console.log("Current file path is ",__filename);
console.log("Current Dir Path is ",__dirname);
var d = new Buffer("Hello");
//console.log("D is ",d);
const fs = require("fs");
const readStream = fs.createReadStream("/Volumes/AmitPassPort/TestingGruntYo.mov");
const writeStream = fs.createWriteStream("/Volumes/AmitPassPort/TestingGruntYoCOPY.mov")
readStream.on('open',()=>{
    console.log("Stream Open");
})
readStream.on('data',(chunk)=>{
    writeStream.write(chunk);
    console.log("Chunk is ",chunk);
})
readStream.on('end',()=>{
    console.log("Stream End and file copied");
})
readStream.on('close',()=>{
    console.log("Stream Close");
})
readStream.on('error',(err)=>{
    console.log("Stream Error ",err);
})
// fs.readFile("/Volumes/AmitPassPort/TestingGruntYo.mov",(err, content)=>{
//     if(err){
//         console.log("File is Not present");
//     }
//     else{
//         console.log("Video Content is ",content);
//     }
// })
console.log("Program Ends");
/*
fs.readFile(__filename,(error, content)=>{
    if(error){
        console.log("File is Not present");
    }
    else{
        console.log("Content is ",content);
    }
})*/