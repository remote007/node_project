const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send("Hi")
})

app.listen(port, ()=>{
    console.log(`Server Connected Successfully at ${port}`);
})