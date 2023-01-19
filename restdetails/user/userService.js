const userDAO = require('./userDAO')

const getUsers = function(done){
    // console.log('asfknsk')

    userDAO.getUsers(done);
}
const getUserbyId = function(userId, done){
    userDAO.getUserbyId(userId, done);
}

const updateUserDeatails = function (userId, userName, done){
    userDAO.updateUserDeatails(userId, userName, done);   
}

const postUserDetails = function(user, done){
    userDAO.postUserDetails(user, done);
}

module.exports = {
    getUsers,
    getUserbyId,
    updateUserDeatails,
    postUserDetails
};