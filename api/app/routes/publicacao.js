module.exports= function(aplicacao){
    
    //POST
    aplicacao.post('/api/v1/publicacao', function(requisicao, resposta){
        aplicacao.app.controllers.publicacao.CriarPublicacao(aplicacao, requisicao, resposta);
    });

    //GET
    aplicacao.get('/api/v1/publicacao', function(requisicao, resposta){
        aplicacao.app.controllers.publicacao.ListarPublicacoes(aplicacao, requisicao, resposta);
    });

    //GET - ID
    aplicacao.get('/api/v1/publicacao/:id', function(requisicao, resposta){
        aplicacao.app.controllers.publicacao.BuscarPublicacao(aplicacao, requisicao, resposta);
    });

    //PUT
    aplicacao.put('/api/v1/publicacao/:id', function(requisicao, resposta){
        aplicacao.app.controllers.publicacao.AtualizarPublicacao(aplicacao, requisicao, resposta);
    });

    //DELETE
    aplicacao.delete('/api/v1/publicacao/:id', function(requisicao, resposta){
        aplicacao.app.controllers.publicacao.ExcluirPublicacao(aplicacao, requisicao, resposta);
    });

    //EXIBIÇÃO DE IMAGENS
    aplicacao.get('/api/v1/publicacao/imagem/:id', function(requisicao, resposta){
        aplicacao.app.controllers.publicacao.BuscarImagem(aplicacao, requisicao, resposta);
    });

    //REMOÇAO DE COMENTARIOS
    aplicacao.delete('/api/v1/publicacao/comentario/:id', function(requisicao, resposta){
        aplicacao.app.controllers.publicacao.ExcluirComentario(aplicacao, requisicao, resposta);
    });
}