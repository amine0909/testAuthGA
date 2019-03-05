const express = require("express")
const {google} = require('googleapis')
const body = require("body-parser")
const app = express()
const oauth2Client = require("./analyticsAuth")


app.use(body.json())




app.post("/token", async (req,res) => {
    const t = req.body.token
    const {tokens} = await oauth2Client.getToken(t)
    oauth2Client.setCredentials(tokens)

    return res.send(tokens)
})


app.get("/data", (req,res) => {
    const analytic = google.analytics({
        version: "v3",
        auth: oauth2Client
    })

    return res.send({oauth2Client, analytic})

})

app.listen(3000, () => {
    console.log("server running")
})

