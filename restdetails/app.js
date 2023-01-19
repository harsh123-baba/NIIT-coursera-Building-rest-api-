const express = require("express");
const app = express();
const config = require('./config');
const userRouter = require("./user/index");


const LoggerMiddleware = (req, res, next)=>{
    console.log(`Logged ${req.url} ${req.method}`);
    next();
}
app.use(LoggerMiddleware);
app.use(express.json())
// app.use(express.urlencoded());

app.use("/users", userRouter)
app.use((req, res, next)=>{
    res.status(400).send("resource not found");
})
app.listen(config.PORT, ()=>{
    console.log("listeining on", config.PORT);

})