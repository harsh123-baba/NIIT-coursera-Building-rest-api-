const userService = require('./userService');

const getUsers = function(done){
    userService.getUsers(done);
}
const getUserbyId = function(userId, done){
    userService.getUserbyId(userId, done);
}

const updateUserDeatails = function (userId, userName, done){
    userService.updateUserDeatails(userId, userName, done);
}

const postUserDetails = function(user, done){
    userService.postUserDetails(user, done);
}

module.exports = {
    getUsers,
    getUserbyId,
    updateUserDeatails,
    postUserDetails
};