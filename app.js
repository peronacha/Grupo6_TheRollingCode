const express = require('express')
const path = require("path")
const app = express();
const port = 3000;
app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
  console.log("Levantando un servidor con Express")
});
app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
})