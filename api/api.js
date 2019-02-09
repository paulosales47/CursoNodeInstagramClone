let server = require('./config/server');
let porta = server.config.configuracao.portaAPI;

server.listen(porta, function(){
    console.log('API online na porta '.concat(porta));
})