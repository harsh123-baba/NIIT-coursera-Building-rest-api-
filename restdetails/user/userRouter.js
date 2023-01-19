const express = require('express');
const routes = express.Router();

const userController = require('./userController');

routes.get("/", (req, res)=>{
    
    // console.log('asfknsk')
    try{
        userController.getUsers((err, result)=>{
            if(err){
                return res.status(400).send(err);
            }
            return res.status(200).send({status : "OK", data:result});
                        
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).send("Try after some time");
    }

})
routes.get("/:userId", (req, res)=>{
    try{
        let userId = req.params.userId;
        console.log(userId)
        userController.getUserbyId(userId, (err, result)=>{
            if(err){
                return res.status(400).send(err);
            }
            else{
                return res.status(200).send({status:"OK", data:result})
            }
        })
    }
    catch(err){
        return res.status(500).send("try other time");
    }
})
routes.put("/:userId", (req, res)=>{
    try{
        const userId = req.params.userId;
        const userName = req.body.userName;
        userController.updateUserDeatails(userId, userName, (err, result)=>{
            if(err){
                return res.status(400).send(err);

            }
            else{
                return res.status(200).send({status : "ok", data:result});
            }
        })

    }
    catch(err){
        return res.status(500).send("unexpected token or req find")
    }
})

routes.post('/', (req, res)=>{
    try{
        // console.log(req.body)
        // let userName= req.body.userName;
        // let userId = req.body.userId;
        // let user = {"userId":userId, "userName":userName} 
        // console.log(user);
        let user = req.body;
        // const userName = user.userName;
        // const userId = user.userId;
        userController.postUserDetails(user, (err, result)=>{
            if(err){
                return res.status(400).send(err);
            }   
            else{
                return res.status(200).send({status: "Ok", data:result})
            }
        })
    }
    catch(err){
        return res.status(500).send("unexpected error occured");
    }
})

module.exports = routes;

