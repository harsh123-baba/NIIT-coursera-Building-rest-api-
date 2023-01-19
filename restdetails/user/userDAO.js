// does operation on data
// data access object

const fs = require('fs');


const getUsers = function(done){
    // console.log('asfknsk')
    fs.readFile('user/users.json', (err, fileData)=>{
        if(err){
            return done("Encountered Error while getting users details");
        }
        let userData = JSON.parse(fileData);
        return done(undefined, userData);
    })
}
// get specific user

const getUserbyId = function(userId, done){
    fs.readFile('user/users.json', (err,fileData)=>{
        if(err){
            console.log(err);
            return done("Encountered Error while getting users details");
        }
        let userData = JSON.parse(fileData);
        let fetchedData = userData.find((x)=> x.userId == userId)
        // console.log(userData)
        // userData.
        if(fetchedData === undefined){
            return done("error found")
        }
        return done(undefined, fetchedData);
    })
}

const updateUserDeatails = function (userId, userName, done){
    fs.readFile('user/users.json', (err,fileData)=>{
        if(err){
            return done("Encountered error while gettting users details");
        }
        let userData = JSON.parse(fileData);
        let index = userData.findIndex(usr => usr.userId == userId);
        if(index == -1){
            return done("No user found on this request");
        }
        userData[index].userName = userName;
        fs.writeFile('user/users.json', JSON.stringify(userData), (err, updatedData)=>{
            if(err){
                return done("Encountered error while updateing");
            }
            return done(undefined, "successfully done");
        })
    })
}

const postUserDetails = function (user, done){
    fs.readFile('user/users.json', (err, fileData)=>{
        if(err){
            return done("Encountered error while gettting users details");
            
        }
        const {userId} = user;
        console.log(user)
        // let userData = JSON.parse(fileData);
        let userData = JSON.parse(fileData);

        let index = userData.findIndex(useritem=> useritem.userId == userId);
        console.log(index)
        if(index !== -1){
            return done("Id already exists")
        }
        userData.push(user);
        fs.writeFile('user/users.json', JSON.stringify(userData), (err, updatedData)=>{
            if(err){
                return done("found errror whille pasting data")
            }
            return done(undefined, {data:updatedData})  
        })
    })
}


module.exports = {
    getUsers,
    getUserbyId,
    updateUserDeatails,
    postUserDetails
};

