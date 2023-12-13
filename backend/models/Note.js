const mongoose = require('mongoose');

const schema = mongoose.Schema(
    {
        title:String,
        name:String,
        email:String,
        date:{type:Date,default:Date.now()}
    }
);

const Note = mongoose.model('Note',schema);

module.exports={Note};