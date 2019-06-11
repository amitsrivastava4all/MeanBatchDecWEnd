const mongoose = require("mongoose");
const config = require("./config");
mongoose.connect('mongodb://amit:amit123@ds153314.mlab.com:53314/finalproject',()=>{
    console.log("DB Connected...");
})