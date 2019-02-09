const PORTA = 3005;
let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORTA, function(){
    console.log('Servidor HTTP online');
});