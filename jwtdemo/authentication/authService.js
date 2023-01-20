const jwt = require('jsonwebtoken');
// const { token } = require('morgan');
const config = require("../config");

function verifyUser({email, password}, userData){
    if(email === userData.email && password == userData.password){
        return true;
    }
    return false;
}

function createJWT(userData){
    const payload = {
        role : "user",
        email : userData.email,
        name : userData.name 
    } 
    let token = jwt.sign(payload, config.AUTH_Token, {
        expiresIn:3600,
    });
    return token;
    
}


module.exports = {
    verifyUser,
    createJWT
}