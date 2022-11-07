const express = require("express");
const { loginController } = require("../Controller/login.controller");
const loginRoute = express.Router();

loginRoute.post("/", loginController);

module.exports = {
    loginRoute
};