
const userService = require('../Users/userService');
const authService = require('./authService');

//import the userService and authService module

//This function will registerUser it will take two parameters
//first the userData second the callback
//call the userService finduser method and also the userService register method
function registerUser(userData,done){
  userService.findUser(userData.email, (err, userFound)=>{
    if(err){
      done(err);
    }
    else{
      console.log("userFound", userFound);
      if(userFound.length != 0){
        done(userFound);
      }
      else{
        userService.registerUser(userData, done);
      }
    }
  })
}

//This function will loginUser 
//Use the method findUser of userService to first verify and if userfound than call
//the createToken method
function loginUser({ email, password }, done) {
  userService.findUser(email, (err, userFound)=>{
    // console.log(userFound);
    if(err){
      done(err);
    }
    const userVerified = authService.verifyUser({email, password}, userFound);
    if(userVerified){
      const jwtToken = authService.createJWT(userFound);
      done(undefined, jwtToken);
    }
    else{
      done({error:"user not verified"});
    }
  })
}

module.exports = {
    registerUser,loginUser

}