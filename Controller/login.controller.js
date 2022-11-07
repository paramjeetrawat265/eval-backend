const { UserModel } = require("../Model/userModel.model");
const bcrypt=require("bcrypt");
var jwt = require('jsonwebtoken');
require("dotenv").config();

const loginController = async (req, res) => {
    const { email, password } = req.body;
    const check = await UserModel.findOne({ email: email });
    if(check){
        const hashPassword = check.password;
        bcrypt.compare(password, hashPassword, function(err, result) {
            if(result){
                var token = jwt.sign({ email: email }, process.env.TOKEN);
                res.send({msg:"Login Successfull",token});
            }
            else{
                res.send("Please Try Again");
            }
        });
    }
    else{
        res.send("User not found");
    }
}

module.exports={
    loginController
}