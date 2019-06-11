const nodemailer = require("nodemailer");

function sendEmails(subject, message,recipients,response,request,userid){
    nodemailer.createTestAccount((error,account)=>{
        let trans = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'',
                pass:''
            }
        });
        let mailOptions = {
            from :'', // sender address
            to :recipients,
            subject:subject,
            text:message
        };
        trans.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log("Email Error ",error);
                response.send('Cant Send Mail Some Error');
            }
            else{
                console.log("Inside Else ",info);
                request.session.user = userid;
                    
                   
                
                response.send("Congrats Account has been created , Check Mail Information... <a href='maindashboard'>Move to DashBoard</a>");
            }
        })
    })
};
module.exports =sendEmails;