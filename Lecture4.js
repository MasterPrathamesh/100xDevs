// Creating an http server through express. 
const express = require("express");
const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('Hello Ji !!')
})

app.listen(port)

// while on the local server there are 2 commands to run this file. 
// go to the terminal 
// enter the first command as : npm init -y and press enter . 
// then give the second command as : npm install express . 