module.exports = function(aplicacao){
    aplicacao.get('/', function(requisicao, resposta){
        aplicacao.app.controllers.home.Index(resposta);
    })
}