/*
This script was made by Phillip Ochola under Buildlab

*/

var express = require('express'),
app = express();

// Set up express environment
express.static.mime.default_type = "text/html";


app.use(express.static(path.join(__dirname, '/static')));