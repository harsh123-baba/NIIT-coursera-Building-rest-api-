// const {response} = reqiure('express');
const express = require('express');
const config = require('../config');
const router =  express.Router();
const oauthctrl = require('./auth_controller');

router.get('/login', (req,res)=>{
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${config.Client_ID}`);

})


router.get('/callback', (req, res)=>{
    try{
        oauthctrl.oauthProcessor(req.query.code, (err, result)=>{
            if(err){
                res.status(401).send({err:"error bad req"});
                
            }
            else{
                res.redirect(`/welcome.html?token=${data}`)
            }
        })
    }
    catch(err){
        res.send(err);
    }
})


module.exports = router;