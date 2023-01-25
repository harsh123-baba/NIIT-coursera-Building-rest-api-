const oauthService = require("./auth.service");


// Controller code which orchestrates the overall process
// It calls the service functions where the business logic is present
function oauthProcessor(code, done) {
  /**
   * 
   * Get the access token for the logged in user
   * 
   */
  oauthService.getGitHubAccessToken(code, (err, token)=>{
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
};