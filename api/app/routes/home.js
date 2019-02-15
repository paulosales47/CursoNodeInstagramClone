module.exports = function(aplicacao){
    aplicacao.get('/', function(requisicao, resposta){
        aplicacao.api.app.controllers.home.Index(resposta);
    })
}