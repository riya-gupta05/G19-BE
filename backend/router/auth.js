const express = require('express');
const authrouter = express.Router();
const {login,signup} = require('../functions/auth')
const {checkcreds} = require('../middleware/checkcreds')


authrouter.get('/login',login)

authrouter.post('/signup',checkcreds,signup)

module.exports= {authrouter}