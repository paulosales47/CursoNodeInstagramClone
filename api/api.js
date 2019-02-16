let {server} = require('./config/server');
let {app} = require('./config/server');

let porta = app.api.config.configuracao.portaAPI;

server.listen(porta, function(){
    console.log('API online na porta '.concat(porta));
})