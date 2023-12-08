const express = require('express');
const router = express.Router();

const {noterouter} = require('./note')
const {authrouter}=require('./auth')

router.use(noterouter)
router.use(authrouter)

module.exports= {router}