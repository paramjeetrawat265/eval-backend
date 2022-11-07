require("dotenv").config();
const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1];
    try{
        var decoded = jwt.verify(token, process.env.TOKEN);
        const { email } = decoded;
        req.body.email=email;
        next();
    }
    catch(err){
        res.send("please login again")
    }
}
module.exports = {
    authentication
}