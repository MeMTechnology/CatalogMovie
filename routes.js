const dir = __dirname + '/public/'

var router = function (app) {
    app.get('/', function (request, response) {
        response.sendFile('index.html')
    })

    app.get('/searchScreen', function (request, response) {
        response.sendFile(dir + '/searchScrenn.html')
    })

    app.get('/registrationScreen', function(request, response){
        response.sendFile(dir + '/registrationScreen.html')
    })

    app.get('/index', function(request, response){
        response.sendFile(dir + '/index.html')
    })
}

module.exports = router