"use strict"

require('getmodule');

const path ="public/";

module.exports = function(app) {
    
    app.get("/", function(req, res) {
        res.sendFile("index.html", {"root": __dirname});
    });

    app.get("/searchScreen", function(req, res){
        res.sendFile("searchScreen.html", {"root": __dirname});
    });
};