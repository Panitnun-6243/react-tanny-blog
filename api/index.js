const express = require("express");
const app = express();
const port = 5000;

app.use("/", (req,res)=>{
    console.log("This is main url")
})

app.listen(port, () =>{
    console.log("Backend is running at port " + port + ".")
})