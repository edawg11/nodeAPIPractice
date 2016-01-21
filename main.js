'use strict';

var PORT = 4000;

var http = require('http');
var math = require('./math');
var md5 = require('md5');
var sentence = require('./sentence');
var gravatarUrl =  'http://www.gravatar.com/avatar/'

var server = http.createServer(function(req, res) {

  var urlParts = req.url.match(/[^/]+/g);
  var slashSplit = req.url.split('/');

  switch(urlParts[0]) {
    case 'time':
      var timestamp = Date.now();
      res.end(timestamp + '\n');
      break;
    case 'math':
      if(urlParts[1] === 'add') {

        var sumStr = math.sumArray(urlParts.slice(2));

        res.end(sumStr + '\n');

      } else if(urlParts[1]==='square'){
        var a = urlParts[2];
        var b = urlParts[3];

        var varSquared = math.square(urlParts.slice(2));
        
        res.end(varSquared + '\n');
      }
      break;
    case 'gravatar':
      var hashedEmail = md5(slashSplit[2])
      var gravPlusHash = gravatarUrl+hashedEmail;

      res.end(gravPlusHash + '\n');
    	break;
    case 'sentence':
      var decoded = decodeURIComponent(urlParts[1]);
      console.log('decoded:', decoded);
      var results = {};

      results.letters = sentence.letters(decoded);
      results.spaces = sentence.spaces(decoded);
      results.words = sentence.spaces(decoded);

      var resultsStr = JSON.stringify(results);

      res.end(resultsStr + '\n');
      break; 
    	  	  
    default:
      res.end("nothing"); 
  }
});

server.listen(PORT, function() {
  console.log('Node server listening on port ' + PORT);
});;

server.listen(4000);