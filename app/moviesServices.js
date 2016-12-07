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
        
    },
    
    filter: function (nome, callback) {
        connection.query('SELECT *, + FROM moviestb WHERE'
                          + 'nome LIKE "%"?"%" OR ano LIKE "%"?"%" OR idioma LIKE "%"?"%" OR genero LIKE"%"?"%"'
                          + 'ORDER BY id', [nome,nome,nome,nome], function (erro, results) {
                              if(error) throw error;
                              
                              callback(results)
                          });
    }
}

module.exports = moviesService;