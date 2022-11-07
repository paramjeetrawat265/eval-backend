const express = require("express");
const { loginController } = require("../Controller/login.controller");
const { todoContoller, getTodoContoller, postTodoContoller } = require("../Controller/todo.controller");
const todoRoute = express.Router();

todoRoute.get("/", getTodoContoller);
todoRoute.post("/create", postTodoContoller)
todoRoute.patch("/update", postTodoContoller)
todoRoute.delete("/delete", postTodoContoller)

module.exports = {
    todoRoute
};