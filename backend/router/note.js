const express = require('express');
const noterouter = express.Router();

const {createnote,deletenote} = require('../functions/note');
const {islogin}= require('../middleware/islogin')

noterouter.get('/createnote', islogin,createnote)
noterouter.get('/delete',islogin,deletenote)

module.exports= {noterouter}