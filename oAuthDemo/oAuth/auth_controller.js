const oauthservice = require('./auth_service');
function oauthProcessor(code, done){
    oauthservice.getGitHubAccessToken(code, (err, token)=>{
        if(err){
            done(err);
        }
        else{
            done(null, token);
        }
    })
}
module.exports = {
    oauthProcessor
}