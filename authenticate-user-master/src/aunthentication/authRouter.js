const express = require('express');
const router = express.Router();
const authController = require("./authController");

//import the modules that are required

//This method post will regiater the use
router.post('/register',(req,res)=>{
  

        //retrive name, email and password from request body
     
        //calling authController registeruser method return the error msg or the result
authController.registerUser(userDetails,(err,result)=>{
   
})
})

//This method post will login the user once they are registered
router.post('/login',(req,res)=>{
   

        //retrive email and password from req.body
      
        //calling the authController login usermethod return the error or the result 
        // authController.loginUser({email,password},(err,result)=>{
           
        // })
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
                        res.status(200).send({STATUS:"OK", data:result});
                    }
                })
        
            }
            catch(err){
                console.log("bhia")
        
            }

})

module.exports = router