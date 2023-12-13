const {User} = require('../models/User')
var bcrypt=require('bcryptjs');
var jwt=require('jsonwebtoken');


const login=async(req,res)=>{
    const {email,password}=req.body;
    const user = User.find({email,password});
    if(user.length>=1){
    const signature='!@#$G19123'
        const status = await bcrypt.compare(password,user[0].password)
        var token = jwt.sign({name:'Riya'},signature);
        console.log("token: ",token)
        var decoded = jwt.verify(token,signature);
        console.log("decoded: ",decoded);
        if(status){
    return res.send({"status":true,user});
    }else{
        return res.send({"status":false,"message":"invalid creds"});
    }
}else{
    return res.send({"status":false,"message":"invalid creds"})
} 
}
const signup=async (req,res)=>{
    const {name,email,password}=req.body
   //console.log(req.body)
    // const data = {
    //     name:"Riya",
    //     email:"xyz@gmail.com",
    //     password:"123456"
    // }
    var salt=await bcrypt.genSalt(10);
    var hashpassword = await bcrypt.hash(password,salt);
    console.log(hashpassword);
    const user = User({name,email,password:hashpassword});
    user.save();
    res.send("helllo ji  i m signup"+user);
}

module.exports = {login,signup}