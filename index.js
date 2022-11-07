const express=require("express");
require("dotenv").config();
const app=express();
const cors=require("cors");
const { connection } = require("./Config/db");

const PORT=process.env.PORT||8000;

app.use(cors());
app.use(express.json);

app.get("/",(req,res)=>{
    console.log("Homepage");
    res.send("Homepage")
})

app.listen(PORT,async()=>{
    try{
        await connection;
        console.log("Connection Established");
    }
    catch(err){
        console.log("Connection Error");
        console.log(err);
    }
    console.log(`Listen at PORT ${PORT}`);
})