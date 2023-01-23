const users = require("./users.json");
const fs = require('fs');


function findUser(email, done){
    console.log(email);
    const userFetched = users.filter((user)=>user.email == email)
    console.log(userFetched)
    done(undefined, userFetched);
}


function registerUser(userData, done){
    users.push(userData);

    fs.writeFileSync('./Users/users.json', JSON.stringify(users));
    done(undefined, userData);
}

module.exports = {
    findUser,
    registerUser
}