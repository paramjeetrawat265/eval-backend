const express = require("express");
const { signupController } = require("../Controller/singup.controller");
const signupRoute = express.Router();

signupRoute.post("/", signupController);

module.exports = {
    signupRoute
};