const {Note} = require('../models/Note');

const createnote=async (req,res)=>{
    const {title,desc,status}=req.body
    const note = await Note({title,desc,status});
    note.save();
    res.send("helllo ji  i m createnote"+note);
}

const searchnote=async (req,res)=>{
    const {title}=req.body
    const notes = await Note({title});
    res.send("helllo ji  i m createnote"+notes);
}

const deletenote=(req,res)=>{
    res.send("helllo ji  i m delete");
}

module.exports = {createnote,deletenote}