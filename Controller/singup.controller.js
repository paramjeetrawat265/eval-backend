const bcrypt=require("bcrypt")
const { UserModel } = require("../Model/userModel.model");

const signupController=async(req,res)=>{
    const { email, password } = req.body;
    const check=await UserModel.findOne({email:email});
    if(check){
        res.send("User Already Exists");
    }
    else{
        bcrypt.hash(password, 5, async function(err, hash) {
            if(err){
                console.log(err);
            }
            else{
                const user=new UserModel({
                    email:email,
                    password:hash
                });
                await user.save();
                res.send("User Created");
            }
        });
    }
}
module.exports={
    signupController
}