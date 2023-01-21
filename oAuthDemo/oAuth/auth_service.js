const axios = require('axios');
const config = require('../config');

function getGitHubAccessToken(code, done){
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
module.exports = {getGitHubAccessToken};
