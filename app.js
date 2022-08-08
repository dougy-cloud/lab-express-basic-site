const express = require("express");
const app = express();

app.get('/story', (req, res)=> {
    res.sendFile(__dirname + "/views/index.html")
});

app.get('/personality', (req, res)=> {
    res.sendFile(__dirname + "/views/carac.html")
});

app.get('/gears', (req, res)=> {
    res.sendFile(__dirname + "/views/obj.html")
});

app.listen(3000,()=>{
    console.log("Listening on port 3000!");
});