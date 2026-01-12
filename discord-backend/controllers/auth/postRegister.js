const User=require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken");
const postRegister= async (req,res)=>
{
    try{
        const {username,mail,password}=req.body; // because we know user body will contain these
        const userExists=await User.exists({mail:mail});

        if(userExists)
        {
            return res.status(409).send("email already exists");
        }

        const encryptedPassword=await bcrypt.hash(password,10);
        const user =await User.create({
            username,
            mail:mail.toLowerCase(),
            password: encryptedPassword
        });

        //now JWT
        const token = jwt.sign(
            {
                userId: user._id,
                mail
            },
            process.env.TOKEN_KEY,
            {
                expiresIn: '24m',
            }
        );
        res.status(201).json({
            userDetails:{
                mail: user.mail,
                token:token,
                username:user.username,
            },
        });
    }   
    catch(err)
    {
        return res.status(500).send("error occured ffff!!!!!!");
    }
    res.send('register route');
};

module.exports=postRegister;