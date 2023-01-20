const jwt = require('jsonwebtoken');
// const { token } = require('morgan');
const config = require("../config");

function verifyUser({email, password}, userData){
    // console.log(userData)
    // console.log(userData[0].email == email)
    if(email == userData[0].email && password == userData[0].password){
        return true;
    }
    return false;
}

function createJWT(userData){
    const payload = {
        role : "user",
        email : userData[0].email,
        name : userData[0].name 
    } 
    console.log(payload)
    let token = jwt.sign(payload, config.AUTH_Token, {
        expiresIn:3600,
    });
    return token;
    
}


module.exports = {
    verifyUser,
    createJWT
}