var usersJson = require("./users.json"); // location of list of users
var http = require("http");
var express = require("express");
var app = express();
var port = "5000";
var ipaddress = 'http://localhost';
//var ipaddress = 'http://xn--dagsfrkaffe-vfb.nu/';

app.use(express.static(__dirname + '/'));

/**
 * Start sidan
 */
app.get('/', function(req, res) {
    res.sendFile(__dirname + 'index.html');
});

/**
 * POST exempel: Alla användare, ett par användare eller en användare.
 */
app.post('/users', function(req, res) {
    var bodyStr = '';
    var userToSend = [];

    req.on("data", function(chunk) {
        bodyStr += chunk.toString();
        var data = bodyStr;
        var users = data.split("+");
        users.forEach(function(user){
            usersJson.forEach(function(myUser){
                if (user === myUser.username) {
                    userToSend.push(myUser);
                }
            });
        });

        if (data == "All") {
            res.send(JSON.stringify(usersJson));
        }
        if (userToSend.length != 0) {
            res.send(JSON.stringify(userToSend));
        }
    });
});

/**
 * Skickar tillbaka alla användare i listan i JSON format.
 */
app.get('/users', function(req, res) {
    res.send(JSON.stringify(usersJson));
});

/**
 * Tar emot en sträng av en eller flera användarnamn("+" tecken används som separator)
 * och skickar tillbaka de användare som finns med i listan(med användaruppgifter).
 */
app.get('/users/:username', function(req, res) {
    var usersFound = [];
    var users = req.params.username.split("+");
    usersJson.forEach(function(user){
        if (users.indexOf(user.username) > -1) {
            usersFound.push(user);
        }
    });

    if (usersFound.length == 1) {
        res.send(JSON.stringify(usersFound[0]));
    } else {
        res.send(JSON.stringify(usersFound));
    }
});

app.listen(port, function() {
    console.log("Server up on " + ipaddress + ":" + port + "/");
});