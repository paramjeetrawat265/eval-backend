const { TodoModel } = require("../Model/todoModel.model");

const getTodoContoller = async (req, res) => {
    const { email } = req.body;
    const todos = await TodoModel.find({ email: email });
    res.send({ todos })
}

const postTodoContoller = async (req, res) => {
    const { email } = req.body;
    const todos = new TodoModel(req.body);
    await todos.save();
    res.send("Todo Added");
}

const updateTodoContoller = async (req, res) => {
    const { email } = req.body;
    await TodoModel.updateOne({ email: email }, req.body);
    res.send("Todo Added");
}

const deleteTodoContoller = async (req, res) => {
    const { email } = req.body;
    await TodoModel.deleteOne({ email: email });
    res.send("Todo Added");
}

module.exports = {
    getTodoContoller,
    postTodoContoller,
    updateTodoContoller,
    deleteTodoContoller
}