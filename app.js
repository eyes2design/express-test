var express = require('express');
var path = require('path');
var app =  express();

app.get('/', function(req, res, next){
    res.send({
        hello: 'world'
    });
});

app.listen(3000, function() {
    console.log('im hre listening');
});