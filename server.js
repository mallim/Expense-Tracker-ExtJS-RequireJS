var express = require('express');
// var http = require('http');
// var reload = require('reload');

var app = express();
// var server = http.createServer( app );

// New call to compress content
app.use(express.compress());

// Serving up the content from public directory
app.use(express.static(__dirname + '/public'));

// Automatically parse JSON in POST requests
app.use(express.bodyParser());

// Set the sessions
app.use(express.cookieParser());
app.use(express.session({secret: '1234567890QWERTY'}));

// Dump errors
app.use(express.errorHandler({
  dumpExceptions: true,
  showStack: true
}));

// Reload code here
// eload(server, app);

// Starts listening on port 3000
app.listen(3000);

console.log("Express server is up and running at 3000 port" );