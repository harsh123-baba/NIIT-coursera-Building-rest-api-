const userDAO = require('./userDAO');


function findUser(email, done){
    userDAO.findUser(email, done);
}
function registerUser(user, done){
    userDAO.registerUser(user, done);
}
module.exports = {
    findUser,
    registerUser
}