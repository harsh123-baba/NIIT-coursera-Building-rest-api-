const jwt = require('jsonwebtoken');
const config = require('../config');

const verifyToken = (req, res, next)=>{
    const token = req.headers["authorization"];
    if(!token){
        return res.status(403).send("A token is required for authentication");
    }
    try{
        const decoded = jwt.verify(token, config.AUTH_Token);
        req.claims = decoded;
        // console.log(req.claims)
    }
    catch(err){
        return res.status(401).send("Invalid Token");
    }
    next();
}
module.exports = verifyToken;