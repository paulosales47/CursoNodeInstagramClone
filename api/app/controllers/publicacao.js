let fs = require('fs');

module.exports.CriarPublicacao = function(aplicacao, requisicao, resposta){
    let origem = requisicao.files.arquivo.path;
    let postagem = requisicao.body;

    let imagem = fs.readFileSync(origem, function(erro){
        if(erro){
            resposta.status(500).send('Ocorreu um erro ao processar ao processar a imagem');
            return;
        }
    });

    fs.unlinkSync(origem);

    let postagemDados = {
         titulo: postagem.titulo
        ,imagem: imagem
        ,nomeImagem: requisicao.files.arquivo.originalFilename
    }

    let conexao = aplicacao.config.configuracao.uriConexao;
    let publicacaoDAO = new aplicacao.app.models.publicacaoDAO(conexao);
    publicacaoDAO.CriarPublicacao(postagemDados, function(result){
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