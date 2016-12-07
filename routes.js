const dir = __dirname + '/public/'
const moviesController = require('./controller/moviesController.js');

var router = function (app) {
    app.get('/', function (request, response) {
        response.sendFile('index.html')
    });

    app.get('/searchScreen', function (request, response) {
        response.sendFile(dir + '/searchScrenn.html')
    });
    
    app.get('/searchScreen/:nome', function(request, response){
        let nome = request.params.nome;
        moviesController.filtrar(nome, response);
    });

    app.get('/registrationScreen', function(request, response){
        response.sendFile(dir + '/registrationScreen.html')
    });

    app.get('/index', function(request, response){
        response.sendFile(dir + '/index.html')
    });
    
     app.post("/cadastrar", function (request, response) {
       moviesController.cadastrar(request.body, response);
    });
    
    app.get("/success", function(request, response) {
        response.sendFile(dir + "/sucess.html");
    });

    app.get("/failed", function(request, response) {
        response.sendFile(dir + "/failed.html");
    });
}

module.exports = router