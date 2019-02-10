let MongoDB = require('mongodb');
let ObjectID = require('mongodb').ObjectID;
class PublicacaoDAO{

    constructor(conexao){
        this._conexao = conexao
    }

    CriarPublicacao(publicacao, callback){

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

    AtualizarPublicacao(id, publicacao, callback){

        publicacao.dataPublicacao = new Date();

        MongoDB.connect(this._conexao, {useNewUrlParser: true})
        .then((client) => {
            client.db()
            .collection('publicacoes')
            .updateOne({_id: ObjectID(id)}, {$set: publicacao}, function(erro, result){
                client.close();
                if(erro)
                    callback(erro);

                callback(result);
            })
        })
        .catch((erro) => callback(erro))

    }

    ExcluirPublicacao(id, callback){
        MongoDB.connect(this._conexao, {useNewUrlParser: true})
        .then((client) => {
            client.db()
            .collection('publicacoes')
            .deleteOne(ObjectID(id), function(erro, result){
                client.close();
                if(erro)
                    callback(erro);
                callback(result);
            })
        })
        .catch((erro) => callback(erro))

    }

    SalvarImagem(imagem, callback){

        MongoDB.connect(this._conexao, {useNewUrlParser: true})   
        .then((client) => {
            client.db()
            .collection('imagens')
            .insertOne(imagem, function(erro){
                if(erro)
                    callback(erro);
                
                callback(imagem);
            });
            client.close();
        })
        .catch((erro) => callback(erro));
    }

    BuscarImagem(id, callback){
        MongoDB.connect(this._conexao, {useNewUrlParser: true})
        .then((client) => {
            client.db()
            .collection('imagens')
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
