const jwt = require('jsonwebtoken');
const config = require('../config');

const verifyToken = (req, res, next)=>{
    const token = req.headers["autherization"];
    if(!token){
        return res.status(403).send("A token is required for authentication");
    }
    try{
        const decoded = jwt.verify(token, config.AUTH_Token);
        req.claims = decoded;
    }
    catch(err){
        
    }
}