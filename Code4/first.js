var fs = require("fs");
// c:\\abcd\\xyz\\first.js
console.log("Before Calling Read File");
function done(err,content){
if(err){
    console.log("Error During File Read ",err);
}
else{
    console.log("Content is "+content);
}
}
var startTime = Date.now();
var content = fs.readFileSync('/Users/amit/Documents/MeanBatchWeekEnd930/nodeexamples/first.js');
console.log("CONTENT IS "+content);
var content = fs.readFileSync('/Users/amit/Documents/MeanBatchWeekEnd930/nodeexamples/first.js');
console.log("CONTENT IS "+content);
var content = fs.readFileSync('/Users/amit/Documents/MeanBatchWeekEnd930/nodeexamples/first.js');
console.log("CONTENT IS "+content);
var content = fs.readFileSync('/Users/amit/Documents/MeanBatchWeekEnd930/nodeexamples/first.js');
console.log("CONTENT IS "+content);
/*fs.readFile("/Users/amit/Documents/MeanBatchWeekEnd930/nodeexamples/first.js",done);
fs.readFile("/Users/amit/Documents/MeanBatchWeekEnd930/nodeexamples/first.js",done);
fs.readFile("/Users/amit/Documents/MeanBatchWeekEnd930/nodeexamples/first.js",done);
fs.readFile("/Users/amit/Documents/MeanBatchWeekEnd930/nodeexamples/first.js",done);*/
var endTime = Date.now();
console.log("**********Total Time Taken ",(endTime-startTime));
console.log("After Calling Read File");
var a= 100;
var b= 200;
var c  =  a+ b;
console.log("Sum is ",c);