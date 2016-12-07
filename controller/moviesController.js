"use strict"

const moviesService = require('../app/moviesServices.js');

var moviesController = {
    cadastrar: function (dados, response) {
        moviesService.save(dados, function callback (id) {
            if(id) {
                response.redirect("/success");
            } else {
                response.redirect("/failed");
            }
        });
    },
    filtrar: function (nome, response) {
        moviesService.filter(nome, function callback (results) {
            if(results){
                response.status(200).send(status);
            }else{
                response.sendStatus(404);
            }
        })
    }
};

module.exports = moviesController;