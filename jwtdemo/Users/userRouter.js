const express = require('express');
const {route} = require("../authentication/")
const router = express.Router();

const userController = require("./userController");

router.get("/", (req, res)=>{
    try{
        const userData = req.claims
        console.log(userData);
        if(!userData.email){
            return res.status(400).send("user Email is not available");
        }
        userController.findUser(userData.email, (err, result)=>{
            if(err){
                res.status(400).send("Error getting the user");
            }
            else{
                res.status(200).send(result);
            }
        })
    }
    catch(err){
        res.status(500).send("ekslvnsdv")
    }
})
module.exports = router;