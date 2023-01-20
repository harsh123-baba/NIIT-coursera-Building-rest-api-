const express = require('express');
const app = express();
const config = require('./config');
const authRouter = require('./authentication');
const userRouter = require("./Users");
const verifyAuth = require('./authentication/authMiddleware')
const dateFormat = require("date-format");
const morgan = require('morgan');

app.use(express.json());
morgan.token('time', ()=>dateFormat.asString(dateFormat.ISO08601_FORMAT, new Date()));

app.use(morgan('[:time]:remote-addr :method :url :status :res[content-length] :response-time ms'))

app.use('/auth', authRouter);
app.use("/users", verifyAuth, userRouter);

app.listen(config.PORT, ()=>{
    console.log("Listen on port 3000");

})