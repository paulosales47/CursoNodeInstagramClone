module.exports.CriarPublicacao = function(aplicacao, requisicao, resposta){
    let postagem = requisicao.body;
    
    let conexao = aplicacao.config.configuracao.uriConexao;
    let publicacaoDAO = new aplicacao.app.models.publicacaoDAO(conexao);
    publicacaoDAO.CriarPublicacao(postagem, function(result){
        resposta.send(result);
    });
}

module.exports.ListarPublicacoes = function(aplicacao, requisicao, resposta){    
    let conexao = aplicacao.config.configuracao.uriConexao;
    let publicacaoDAO = new aplicacao.app.models.publicacaoDAO(conexao);
    publicacaoDAO.ListarPublicacoes(function(result){
        if(result.length > 0)
            resposta.send(result);
        else
            resposta.status(404).send({mensagem: 'Nenhuma publicação cadastrada'});
    });
}

module.exports.BuscarPublicacao = function(aplicacao, requisicao, resposta){    
    let id = requisicao.params.id;
    
    let conexao = aplicacao.config.configuracao.uriConexao;
    let publicacaoDAO = new aplicacao.app.models.publicacaoDAO(conexao);
    publicacaoDAO.BuscarPublicacao(id, function(result){
        if(result.length > 0)
            resposta.send(result);
        else
            resposta.status(404).send({mensagem: 'Nenhuma publicação localizada'});
    });
}

module.exports.AtualizarPublicacao = function(aplicacao, requisicao, resposta){    
    let id = requisicao.params.id;
    let publicacao = requisicao.body;
    
    let conexao = aplicacao.config.configuracao.uriConexao;
    let publicacaoDAO = new aplicacao.app.models.publicacaoDAO(conexao);
    publicacaoDAO.AtualizarPublicacao(id, publicacao, function(result){
        if(result.result.nModified != 0)
            resposta.send(result);
        else
            resposta.status(304).send();
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