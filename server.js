var express = require('express');
var server = express();
var path = require('path');
var hipstercoffee = require('./hipstercoffee.json')
var port = process.env.PORT || 3000;

server.use(express.static(__dirname + '/public'));
server.use('/bower_components', express.static(__dirname + '/bower_components'));

server.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/views/index.html'));
});

server.get('/items', function(request, response){
  response.json(hipstercoffee);
});

server.listen(port, function() {
  console.log("Node app is running at localhost:" + port)
})