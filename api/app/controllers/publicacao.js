module.exports.Publicar = function(aplicacao, requisicao, resposta){
    let postagem = requisicao.body;
    
    let conexao = aplicacao.config.configuracao.uriConexao;
    let publicacaoDAO = new aplicacao.app.models.publicacaoDAO(conexao);
    publicacaoDAO.NovaPublicacao(postagem, function(result){
        resposta.send(result);
    });
}

module.exports.ListarPublicacoes = function(aplicacao, requisicao, resposta){    
    let conexao = aplicacao.config.configuracao.uriConexao;
    let publicacaoDAO = new aplicacao.app.models.publicacaoDAO(conexao);
    publicacaoDAO.ListarPublicacoes(function(result){
        resposta.send(result);
    });
}

module.exports.BuscarPublicacao = function(aplicacao, requisicao, resposta){    
    let id = requisicao.params.id;
    
    let conexao = aplicacao.config.configuracao.uriConexao;
    let publicacaoDAO = new aplicacao.app.models.publicacaoDAO(conexao);
    publicacaoDAO.BuscarPublicacao(id, function(result){
        resposta.send(result);
    });
}

module.exports.AtualizarPublicacao = function(aplicacao, requisicao, resposta){    
    let id = requisicao.params.id;
    let publicacao = requisicao.body;
    
    let conexao = aplicacao.config.configuracao.uriConexao;
    let publicacaoDAO = new aplicacao.app.models.publicacaoDAO(conexao);
    publicacaoDAO.AtualizarPublicacao(id, publicacao, function(result){
        resposta.send(result);
    });
}

module.exports.ExcluirPublicacao = function(aplicacao, requisicao, resposta){    
    let id = requisicao.params.id;
    
    let conexao = aplicacao.config.configuracao.uriConexao;
    let publicacaoDAO = new aplicacao.app.models.publicacaoDAO(conexao);
    publicacaoDAO.ExcluirPublicacao(id, function(result){
        resposta.send(result);
    });
}