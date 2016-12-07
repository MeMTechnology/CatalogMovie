const connection = require('./conexao.js')

var moviesService = {
    save: function (dados, callback) {
        
        console.log(dados.nome);
        
        var query = connection.query('INSERT INTO `moviestb` SET ? ', [dados], function (err, result){
        //connection.query('INSERT INTO `moviestb` SET ? ', [dados], function (err, result) {
        console.log(query.sql);
        if (err) throw err;
       callback(result.affectedRows); 
        });
        
    }
}

module.exports = moviesService;