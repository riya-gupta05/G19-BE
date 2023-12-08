const express  = require('express')
require('dotenv').config();
const {connectToMongo}=require('./db')
const app = express();
app.use(express.json())
const {router} = require('./router/router')
const port = process.env.PORT
connectToMongo()
app.use(router)

app.listen(3000,()=>{
    console.log("app started");
})