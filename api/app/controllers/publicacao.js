module.exports.PublicarV1 = function(aplicacao, requisicao, resposta){
    let postagem = requisicao.body;
    
    let conexao = aplicacao.config.configuracao.uriConexao;
    let publicacaoDAO = new aplicacao.app.models.publicacaoDAO(conexao);
    publicacaoDAO.NovaPublicacao(postagem, function(result){
        resposta.send(result);
    });
}