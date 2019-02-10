const PORTA = 3005;
let express = require('express');
let bodyParser = require('body-parser');
let consign = require('consign');
let connectMultipart = require('connect-multiparty');
let cors = require('cors');
let app = express();

let corsConfig = cors({
    origin: 'http://localhost:3006',
    optionsSuccessStatus: 200
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(connectMultipart());
app.use(corsConfig);

app.set('cors', corsConfig);

consign()
    .include('./app/controllers')
    .then('./app/routes')
    .then('./app/models')
    .then('./config/configuracao.js')
    .into(app);

module.exports = app;
