const axios = require('axios');
const config = require("../config");

// function to get the access token
function getGithubAccessToken(code, done) {
  
}


// Function to get the user profile for the token provided
function getAccessTokenOfUser(token, done) {
  // Github APIs are authenticated and we have to share the token in headers
  // The token is same as what we recieved in the previous step
  const body = {
    client_id : config.Client_ID,
    client_secret : config.Client_secrets,
    code,
  }
  const opts = {header:{accept : 'application/json'}};

  axios.post('https://github.com/login/outh/acces_token', body, opts),then((response)=>response.data.access_token)
  .then((token)=>{
      done(null, token);
  })
  .catch((err)=>{
      done({err:err.message});
  })
  
}

module.exports = {
  getGithubAccessToken,
  getAccessTokenOfUser
}



