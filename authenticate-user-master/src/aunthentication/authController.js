

//import the userService and authService module
// const e = require('express');
const userService = require('../Users/userService');
const authService = require('./authService');

//This function will registerUser it will take two parameters
//first the userData second the callback
//call the userService finduser method and also the userService register method
function registerUser(userData, done) {

}

//This function will loginUser 
//Use the method findUser of userService to first verify and if userfound than call
//the createToken method
function loginUser({ email, password }, done) {
  userService.findUser(email, (err, userFound) => {
    // console.log(userFound)
    if (err) {
      done(err);
    }
    // console.log("bhaI", userFound)
    const userVerified = authService.verifyUser({ email, password }, ...userFound);
    // console.log(userVerified)
    if (userVerified) {
      // console.log(userFound)
      const jwtToken = authService.createJWT(userFound);
      // console.log(jwtToken)
      done(undefined, jwtToken);
    }
    else {
      done({ error: "User not verified" });
    }
  })
}

module.exports = {
  registerUser, loginUser

}