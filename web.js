/**
* Module dependencies.
*/

var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response){
var html = fs.readFileSync(htmlfile).toString();
response.send(fs.readFileSync( './index.html').toString('utf-8'));
response.send(html);
});

// all environments
var port= process.env.PORT || 8080;

app.listen(port, function(){
    console.log('Listening on port ' + port);
});
