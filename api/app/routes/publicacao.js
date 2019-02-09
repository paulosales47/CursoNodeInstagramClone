module.exports= function(aplicacao){
    
    //POST
    aplicacao.post('/api/v1/publicacao', function(requisicao, resposta){
        aplicacao.app.controllers.publicacao.PublicarV1(aplicacao, requisicao, resposta);
    });


}