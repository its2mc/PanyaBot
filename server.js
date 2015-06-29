/*
This script was made by Phillip Ochola under Buildlab

*/

var express = require('express'),
httpsPort = 8082,
app = express();

// Set up express environment
express.static.mime.default_type = "text/html";

app.use(express.static(path.join(__dirname, '/static')));

// Start listening on the port
app.listen(httpsPort, function() {
	console.log('HTTPS Server: http://localhost:'+ httpsPort);
})