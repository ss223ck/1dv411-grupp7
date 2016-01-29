var express = require('express');
var fs = require("fs");
var router = express.Router();
var requestify = require("requestify");

/* GET home page. */
router.get('/', function(req, res, next) {
  //<------------------------Get the favorite games----------------------->
  var favGames = {};
  var content = fs.readFileSync("../favGames.json");
  favGames = JSON.parse(content.toString('utf8'));
  
  
  console.log(req.query.code);
  console.log(req.session.token);
  
  //<------------------------Check if github sent the code----------------------->
  if(req.query.code){
    
    //<------------------------Post code and other information to get a token----------------------->
    requestify.post("https://github.com/login/oauth/access_token",{
      Accept: "application/json",
      client_id: "BLABLALBA",
      client_secret: "BLABLALBABLABLALBABLABLALBABLABLALBABLABLALBA",
      code: req.query.code
    }).then(function(response){
      
      //<------------------------Function callback on success----------------------->
      var recieved = response.getBody();
      var accessToken = recieved.access_token;
      req.session.token = accessToken;
      res.redirect("/");
      
    });
  }
  
  //<------------------------Check if user wants to go to list----------------------->
  else if(req.query.list){
    
    //<------------------------Check if there is a token----------------------->
     if(req.session.token){
       
       //<------------------------Request a list of current users repos list, and send the token----------------------->
        requestify.get("https://api.github.com/user/repos?access_token=" + req.session.token + "&per_page=100", {
            sort: "full_name",
            direction: "desc",
            affiliation: "owner",
            access_token: req.session.token
        }).then(function(response){
          
          //<------------------------Recieve data and render----------------------->
            console.log("Recieved data from github");
            console.log(JSON.stringify(response.getBody()));
            res.render('index', {
            title: 'Games list',
            favGames: favGames,
            login: true,
            listMode: true,
            repos: response.getBody()
          });
        });
    }
    
    //<------------------------If there is no token----------------------->
    else{
        res.redirect("/");
    }
  }
  
  //<------------------------Check if user wants to log out (just removes the token from sesion)----------------------->
  else if(req.query.logout){
    req.session.token = undefined;
    res.redirect("/");
  }
  
  //<------------------------No action, render default page----------------------->
  else{
    
    //<------------------------Check login----------------------->
    var login;
    if(req.session.token){
      login = true;
    }
    else{
      login = false;
    }
    
    //<------------------------Render page----------------------->
    res.render('index', {
      title: 'Games list',
      favGames: favGames,
      login: login,
      listMode: false
    });
  }
});

//Handle POST action
router.post('/', function(req, res, next) {
  
  //<------------------------Check the text field----------------------->
  if(req.body.text){
    var favGames = {};
    var content = fs.readFileSync("../favGames.json");
    favGames = JSON.parse(content.toString('utf8'));
    favGames.games.push(req.body.text);
    var data = JSON.stringify(favGames);
    fs.writeFileSync("../favGames.json", data);
    res.redirect("/");
  }
  
  //<------------------------Check the username field----------------------->
  else if(req.body.githubUsername){
    if(req.session.token){
      res.redirect('/?username='+ req.body.githubUsername +'');
    }
  }
});

module.exports = router;
