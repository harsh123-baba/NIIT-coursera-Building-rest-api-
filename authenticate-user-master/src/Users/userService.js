const userDAO = require('./userDAO');

//import dao layer
function findUser(email,done){
    //call the userdao finduser method
    userDAO.findUser(email, done);
    
}

function registerUser(userData,done){
    //call the userdao registeruser method
   
}


module.exports={
    findUser, registerUser
}