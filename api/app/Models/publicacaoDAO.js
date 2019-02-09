let MongoDB = require('mongodb');
let ObjectID = require('mongodb').ObjectID;
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

    ListarPublicacoes(callback){
        MongoDB.connect(this._conexao, {useNewUrlParser: true})
        .then((client) => {
            client.db()
            .collection('publicacoes')
            .find({})
            .toArray(function(erro, result){
                client.close();
                if(erro)
                    callback(erro);

                callback(result);
            })
        })
        .catch((erro) => callback(erro))

    }

    BuscarPublicacao(id, callback){
        MongoDB.connect(this._conexao, {useNewUrlParser: true})
        .then((client) => {
            client.db()
            .collection('publicacoes')
            .find(ObjectID(id))
            .toArray(function(erro, result){
                client.close();
                if(erro)
                    callback(erro);

                callback(result);
            })
        })
        .catch((erro) => callback(erro))

    }
}

module.exports = function(){
    return PublicacaoDAO;
}
