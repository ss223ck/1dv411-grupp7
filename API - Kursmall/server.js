var http = require("http");
var express = require("express");
var app = express();
var port = "5001";
var ipaddress = 'http://localhost';

app.use(express.static(__dirname + '/'));

/**
 * Start sidan
 */
app.get('/', function(req, res) {
    res.sendFile(__dirname + 'index.html');
});

/**
 * Hämta specifik mall från en lista av mallar
 */
app.get('/templates/:template', function(req, res) {
    var template = req.params.template;
    var templateJson = require("./templates/" + template + ".json");

    res.send(JSON.stringify(templateJson));
});

app.listen(port, function() {
    console.log("Server up on " + ipaddress + ":" + port + "/");
});