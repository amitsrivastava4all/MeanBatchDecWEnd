const mongoose = require('mongoose');
const url = require('./config');
mongoose.connect(url.db);
module.exports = mongoose;