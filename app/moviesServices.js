const connection = require('./conexao.js')

var moviesService = {
    save: function (dados, callback) {
        
        connection.query('INSERT INTO `moviestb` SET ? ', [dados], function (err, result) {
            if (err) throw err;

        callback(result.affectedRows); });
        
    }
}

module.exports = moviesService;