const express = require('express');
const path = require('path');
const dateFormat = require('date-format');
const app = express();
const morgan = require('morgan');
const config = require('./config');
const oauthrouter = require('./oauth');

morgan.token('time', ()=>dateFormat.asString(dateFormat.IS08601_FORMAT, new Date()));
app.use(morgan(`[:time] remote-addr  :method :url :status :res[content-length] : reponse-time ms`));

app.use(express.static('static'));
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/static/index.html'))
})
app.use('/oauth', oauthrouter);
app.listen(config.PORT, ()=>{
    console.log("Appis vmdsvmcl");
})