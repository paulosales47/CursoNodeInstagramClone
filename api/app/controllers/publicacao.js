module.exports.PublicarV1 = function(aplicacao, requisicao, resposta){
    let postagem = requisicao.body;
    resposta.send(postagem);
}