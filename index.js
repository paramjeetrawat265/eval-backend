const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const { connection } = require("./Config/db");
const { loginRoute } = require("./Routes/login.route");
const { signupRoute } = require("./Routes/signup.route");
const { authentication } = require("./Middleware/authentication");
const { authorisation } = require("./Middleware/authorisatioin");
const { todoRoute } = require("./Routes/todo.route");

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Homepage")
})

app.use("/signup",signupRoute);

app.use("/login", loginRoute);

app.use("/todo",authentication,todoRoute)

app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connection Established");
    }
    catch (err) {
        console.log("Connection Error");
        console.log(err);
    }
    console.log(`Listen at PORT ${PORT}`);
})