const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    email: String,
    password: String,
})

const UserModel = mongoose.model("Users", userSchema)

module.exports = {
    UserModel
}