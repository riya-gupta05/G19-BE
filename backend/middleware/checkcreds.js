const checkcreds=(req,res,next)=>{
    const {name,email,password,cpassword}=req.body;
    if(name.length<3 || password!==cpassword){
        res.send("invalid creds")
    }
    next();
}

module.exports={checkcreds}