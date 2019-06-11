const jwt = require('jsonwebtoken');
const config = require('./config');
const tokenOperations = {
    generateToken(userid){
        var token = jwt.sign({userid }, config.SECRET,{ expiresIn: '1h' });
        return token;
    },
    verifyToken(token){
        var decoded = jwt.verify(token, config.SECRET);
        console.log('Decode is ',decoded.userid);
        return decoded;
    }

}
module.exports = tokenOperations;
// const localToken = tokenOperations.generateToken('amit');
// const localToken2 = tokenOperations.generateToken('ram');
// console.log('LOcal Token is ',localToken, " Ram ",localToken2);
// var obj  = tokenOperations.verifyToken(localToken);
// console.log('Return Value After Verify ',obj);
// var obj  = tokenOperations.verifyToken(localToken2);
// console.log('Return Value After Verify ',obj);


