const mongoose = require('mongoose');
const env = require('../utils/env');
 mongoose.connect(env.mongo);
mongoose.connection.on('open',()=>{
    console.log('ConnectionOpen');
})
module.exports = mongoose;
// mongoConnect.on('open',()=>{
//     console.log('Connection Open');
// })