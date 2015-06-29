/*
This script was made by Phillip Ochola under Buildlab

*/

var express = require('express'),
noble = require('noble'),
path = require('path'),
httpsPort = 8082,
app = express(),
RSSI_THRESHOLD    = -90,
EXIT_GRACE_PERIOD = 2000; // milliseconds


// Set up express environment
express.static.mime.default_type = "text/html";

app.use(express.static(path.join(__dirname, '/static')));

// Get method template... used for basic routing 
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method template .. used for database access
// Supports larger info flows
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

//Get
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});//Load chang

//Database Access Routing

// Start listening on the port
app.listen(httpsPort, function() {
	console.log('HTTPS Server: http://localhost:'+ httpsPort);
})