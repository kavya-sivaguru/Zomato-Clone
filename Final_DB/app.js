// MVC architecture express application

// import statements
const express = require('express');
const mongoose = require('mongoose');
const router = require("./Routers/index");

// creating server at a port
const port = 4948;
const hostname = 'localhost';
const localDB = 'mongodb://127.0.0.1:27017/zomato';
const atlasDB = 'mongodb+srv://kavya:YucT2ADeqa3IIScB@cluster0.xehod.mongodb.net/zomato?retryWrites=true&w=majority';

const app = express();
// parse(read) the json object returned by req.body - needed for c/user.js line 4
app.use(express.json());
// all incoming request will be sent to router
app.use('/',router);


mongoose.connect(atlasDB,{ useNewUrlParser: true , useUnifiedTopology: true})
.then(res=>{
    // will excecute only once when the server is started
    app.listen(port, hostname, () => {
    console.log(`Server is running at ${hostname}:${port}`);
    });
})

.catch(err => console.error(err));
