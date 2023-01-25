
const jwt = require('jsonwebtoken');
// const { token } = require('morgan');
const config = require("../../config");

//import jsonwebtoken and config file

//This function will verify email and password and will return true and false

function verifyUser({email,password},userData){
//  console.log(userData)
  // console.log(userData)
  // console.log({email, password})
   if(userData===undefined){
  return false
   }
   else {

     if(email === userData.email && password === userData.password)
     return true;
   }
    
  
}

//This function will create JWT token and return the token
// use the method jwt.sign having two parameters payload and Auth_Secret
function createJWT(userdata) {
  //create payload
  // console.log(userdata)
  const payload = {
    role : "user",
    email : userdata[0].email,
    name : userdata[0].name 
} 
// console.log(payload)
  let token =  jwt.sign(payload, config.AUTH_SECRET, {
      expiresIn:3600,
  });
  // console.log(token)
// return token;
    return token;
  }


  module.exports={
    verifyUser,createJWT
  }