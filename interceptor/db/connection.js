const mongoose = require('mongoose');
const config = require('../utils/config');
mongoose.connect(config.dbURL);
module.exports = mongoose;