const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
    email:String,
    taskname: String,
    status: Boolean,
    tag:String
})

const TodoModel = mongoose.model("Todos", todoSchema)

module.exports = {
    TodoModel
}