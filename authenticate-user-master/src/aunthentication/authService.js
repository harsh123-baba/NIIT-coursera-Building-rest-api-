

//import jsonwebtoken and config file
const jwt = require('jsonwebtoken');
const config = require('../../config')
//This function will verify email and password and will return true and false

function verifyUser({email,password},userData){ 
  // console.log("bhai",userData)
  if(userData.length != 0){

    if(email == userData[0].email && password == userData[0].password){
      return true;
    } 
    else {
      return false; 
    }
  }
  else{
    return false;
  }
}

//This function will create JWT token and return the token
// use the method jwt.sign having two parameters payload and Auth_Secret
function createJWT(userdata) {
  
  const payload = {
    role : "user",
    email : userdata.email,
    name : userdata.name 
} 
// console.log(payload)
let token = jwt.sign(payload, config.AUTH_SECRET, {
    expiresIn:3600,
});
return token;
  }


  module.exports={
    verifyUser,createJWT
  }