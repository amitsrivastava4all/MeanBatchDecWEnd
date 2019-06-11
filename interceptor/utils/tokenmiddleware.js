const tokenOpr = require('./token');
const config = require('./config');
function checkToken (request, response,next){
    var token = request.headers['auth-token'];
    if(token){
            let decoded = tokenOpr.verifyToken(token);
            console.log('After Token Verified ',decoded)
            if(!decoded){
                response.status(401).json({status:config.status.ERROR,message:'Invalid Token',})

            }
            else{
                next();
            }
            
           
    }
    else{
        response.status(401).json({status:config.status.ERROR,message:'U r UnAuthorized to access this Page',})
    }
    
}
module.exports = checkToken;