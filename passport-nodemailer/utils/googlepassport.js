const GoogleStrategy = require("passport-google-oauth2");
const passport = require("passport");
const connection = require("../db/connection");
const User = require("../db/models/userschema");
// this will call when u write a cookie
passport.serializeUser((user, done)=>{
    var error = null;
    done(error, user);
});
// this will call when u read a data from cookie
passport.deserializeUser((userid, done)=>{
    console.log("User Session ",userid);
    User.findById(userid).then(user=>{
        done(null, user);
    })

})
passport.use(new GoogleStrategy({
    callbackURL:'/dashboard',
    clientID:'',
    clientSecret:''
},(accessToken, refreshToken, profile, done)=>{
    console.log("CallBack Google...",profile," Token ",accessToken);
    // var userObject = {
    //     email : profile._json.emails[0].value,
    //     name: profile.displayName,
    //     image:profile._json.image.url
    // };
    User.findOne({googleId:profile.id}).then(currentUser=>{
        if(currentUser){
            console.log("User exist ");
            done(null, currentUser); // Call Serialize
        }
        else{
            console.log("User Creating....");
            var userObject = new User({username:profile.displayName, googleId:profile.id,pic:profile._json.image.url,email:profile._json.emails[0].value,roleid:1002});
            userObject.save().then(newUser=>{
                console.log("New User Added...");
                
                done(null, newUser);
            });
        }
    // done(null, userObject);
});
}));