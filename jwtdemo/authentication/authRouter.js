// const experss = require('express');
const express = require('express');
const router = express.Router();
const authController = require("./authController");

router.post("/register", (req, res)=>{
    try{
        const {name, email, password} = req.body;
        if(!(name, email, password)){
            return res.status(400).status.send("Required inputs are missing");   
        }
        const userDetails = {
            name, email, password
        }
        authController.registerUser(userDetails, (err, results)=>{
            if(err){
                return res.status(400).send({error : "User already exists"});
            }
            res.status(201).send(results);
        })   
    }
    catch(err){
        return res.send("Unexpected error while sending")
    }

})

router.post("/login", (req, res)=>{
    try{
        const {email, password} = req.body;
        if(!(email && password)){
            return res.status(400).send("required inputs are missing");

        }
        authController.loginUser({email, password}, (err, result)=>{
            if(err){
                res.status(401).send({error:"Invalid Credantials", err})
            }
            else{
                res.status(200).send(result);
            }
        })

    }
    catch(err){

    }
})


module.exports = router;
