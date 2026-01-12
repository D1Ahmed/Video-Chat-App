const User = require("../../models/user");
const bcrypt=require("bcryptjs")
const jwt = require("jsonwebtoken");
const postLogin= async (req,res)=>
{
    try{
        const {mail,password}= req.body;
        const user = await User.findOne({mail:mail.toLowerCase()});
        if(user && (await bcrypt.compare(password,user.password)))
        {
            //here we send tokn
            const token ='JWT_TOKEN';
            return res.status(200).json({
                userDetails: {
                    mail: user.mail,
                    token:token,
                    username:user.username,
                }
            });
        }
        return res.status(400).send("invalid credentials")
    }   
    catch(err)
    {
        return res.status(500).send("nah smt wring");
    }
};

module.exports=postLogin;   