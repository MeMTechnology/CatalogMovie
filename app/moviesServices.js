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
        connection.query('SELECT * FROM moviestb WHERE '
                         + 'nome LIKE "%'+ nome + '%" OR ano LIKE "%'+ nome +'%" OR idioma LIKE "%' + nome +'%" OR genero LIKE"% ' + nome +'%"'
                         + 'ORDER BY cod', [nome,nome,nome,nome],function (error, results) {
                              if(error) throw error;
                            
                              callback(results)
                          });
    }
}

module.exports = moviesService;