const {google} = require('googleapis')
const scopes = 'https://www.googleapis.com/auth/analytics.readonly'


var oauth2Client= null

function gaAuth(){
    oauth2Client = new google.auth.OAuth2(
       "251646880979-508i4ekern9enqloa2q9lvs3e1ddi2ui.apps.googleusercontent.com",
       "-ANS-TEk1pkK4m4RSjFf3dyZ",
       "https://localhost:3000"
   )

   const url = oauth2Client.generateAuthUrl({
       scope:scopes,
       access_type: "offline"
   })

   console.log(url)
}

gaAuth()

module.exports = oauth2Client
