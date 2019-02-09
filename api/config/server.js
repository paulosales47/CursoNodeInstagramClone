const PORTA = 3005;
let express = require('express');
let bodyParser = require('body-parser');
let consign = require('consign');

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

consign()
    .include('./app/controllers')
    .then('./app/routes')
    .then('./app/models')
    .then('./config/configuracao.js')
    .into(app);

module.exports = app;
