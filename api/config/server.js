const PORTA = 3005;
let express = require('express');
let bodyParser = require('body-parser');
let consign = require('consign');
let connectMultipart = require('connect-multiparty');
let https = require('https');
let fs = require('fs');

let app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(connectMultipart());
app.use(function(requisicao, resposta, next){
    resposta.setHeader('Access-Control-Allow-Origin', 'http://localhost:3006');
    resposta.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    resposta.setHeader('Access-Control-Allow-Headers', 'content-type');
    resposta.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

consign()
    .include('./api/app/controllers')
    .then('./api/app/routes')
    .then('./api/app/models')
    .then('./api/config/configuracao.js')
    .into(app);

let server = https.createServer({
    key: fs.readFileSync('./api/config/server.key'),
    cert: fs.readFileSync('./api/config/server.cert')
}, app);

module.exports.server = server;
module.exports.app = app;
