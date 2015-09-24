var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
//var http = require('http');

var index = require('./routes/index');
var mWorker = require('../makeWorker.js');

app.use(express.static(path.join(__dirname,'./public')));

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

app.use(bodyParser.json());

app.get('/', function (req, res, next) {
    console.log('Here is a console log');
    res.sendFile(path.join( __dirname, './public','views/index.html'));
//    next();
});

app.get('/getWorker',function(req, res, next){
    var worker = mWorker();
    //console.log(worker);
    res.send(worker);
});

module.exports = app;
