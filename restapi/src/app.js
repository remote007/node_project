const express = require("express");
const app = express();
require("./db/conn");
const Student = require("./models/students");
const port = process.env.PORT || 8000;
app.use(express.json())

// app.get("/",(req,res) => {
//     res.send("Hello! from the other side by me , I'm healthy");
// })
app.post("/student",(req,res)=>{
    console.log(req.body);
    res.send("Hello! from the other side");
})
app.listen(port , ()=>{
     console.log(`Connection Established at ${port}`);
});