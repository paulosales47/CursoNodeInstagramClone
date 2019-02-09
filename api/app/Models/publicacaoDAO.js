let MongoDB = require('mongodb');

class PublicacaoDAO{

    constructor(conexao){
        this._conexao = conexao
    }

    NovaPublicacao(publicacao, callback){

        publicacao.dataPublicacao = new Date();

        MongoDB.connect(this._conexao, {useNewUrlParser: true})   
        .then((client) => {
            client.db()
            .collection('publicacoes')
            .insertOne(publicacao, function(erro){
                if(erro)
                    callback(erro);
                
                callback(publicacao);
            });
            client.close();
        })
        .catch((erro) => callback(erro));
    }
}

module.exports = function(){
    return PublicacaoDAO;
}
