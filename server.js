"use strict"

const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

app.get('/', function(request, response){
    request.sendFile('index.html')
})

const port = 5100;
const hostname = "localhost";

app.listen(port, onStart());
function onStart() {
    console.log(`Server started at http://${hostname}:${port}`);
};