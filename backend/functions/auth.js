const login=(req,res)=>{
    res.send("helllo ji i m login");
}
const signup=(req,res)=>{
    console.log(req.body)
    res.send("helllo ji  i m signup");
}

module.exports = {login,signup}