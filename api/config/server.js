const PORTA = 3005;
let express = require('express');
let bodyParser = require('body-parser');
let consign = require('consign');
let connectMultipart = require('connect-multiparty');
let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(connectMultipart());

consign()
    .include('./app/controllers')
    .then('./app/routes')
    .then('./app/models')
    .then('./config/configuracao.js')
    .into(app);

module.exports = app;
