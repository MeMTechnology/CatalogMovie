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
};

module.exports = moviesController;