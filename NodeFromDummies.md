##Node JS The Supreeme Server Language

Okej nu är jag ju inget proffs, men här är en lite amatör guide. Skulle våga säga att mitt första tips är att strunta i denna guiden och googla fram en riktig tutorial istället

##1 Installera Grejer

Först och främst behöver du installer node. det hittar man här https://nodejs.org/en/

Sen behöver du en riktig komandotolk för att saker och tung fungerar inte i CMD.exe. Jag kör med denna http://babun.github.io/ men typ git bash funkar också.

När du installerat båda dessa så öppnar du kommandotolken och skriver 
        
        node -v

Då borde det stå nåogt i stil med
        
        v4.2.2

Sen ska du kolla om du har NPM (Nodes pakethanterare) det gör man genom att skriva

        npm -v

Då borde det stå
        
        2.14.7


Om det INTE gör det så har något blivit fel med instalationen och då är det bara att göra om och göra rätt

Om de däremot ser ut som ovan så är allt installerat :) 

#2 Göra ett projekt

Nu kör vi. Gör en mapp där du vill ha projektet. Sen så navigerar du dig till mapen med komandotolken. Man kan antingen anvädna komandot cd eller så kan man högerklicka i mappen och välja "Launche Babun here" eller "git bash here"

När du väll är där så skriver du 

    npm init
    
då får du upp ett par fråger som initsierar projektets package.json fil. 

Sen öppnar du upp din editor och skapar en fil som heter något i stil med server.js. Den filen är nu din server. För att prova den så kan du kopiera in följande kod:

        var http = require("http");

        http.createServer(function(request, response) {
          response.writeHead(200, {"Content-Type": "text/plain"});
          response.write("Fuck Aina");
          response.end();
        }).listen(1312);
        
 Nu så nu har vi en webserver som kommer ligga på port 1312 och som skriver ut "Fuck Aina" på sidan(ja jag är fett mogen). För att sedan starta servern så öppnar du komandotolken och skriver in node server.js och går in på localhost:1312 och där borde din sida ligga. För att sedan stänga av server trycker man ctrl + c två gånger
 
 #3 Paket
 
 När man vill instalera paket till node så använder man npm. Man börjar med att hitta ett paket man vill ha. Ett bra ställe att hitta såna är https://www.npmjs.com/.
 Om vi då tillexempel vill instalera express så skriver man in
 
        npm install express

Och då ser du i komandotolken att den instalerar. Man kan också skriva 

        npm install express --save
 
Då läggs det som en dependenci i din pakage.json.

#4 Express

Express gör routing löjligt enkelt. Jag tänker att vi kan gå igenom severn jag gjorde till api mockupen. Ska dock lägga till att detta säkert är långt från best practise men det ger iallafall en bild av vad man kan göra. 




Vi börjar med att requira in packetet http för att kunna göra en server. Detta finns redan i ndoe och behöver inte instaleras

        var http = require("http");

Sen requirar vi in express och gör lite instälningar. Vi säger åt express att göra på port 5000 på http://xn--dagsfrkaffe-vfb.nu/ och att servern ligger i huvud mappen 

        var express = require("express"), app = express()
          , port = "5000"
          , ipaddr = 'http://xn--dagsfrkaffe-vfb.nu/';
          
och att servern ligger i huvud mappen 
        app.use(express.static(__dirname + '/'));


Här har vi då routsen. man defingerar helt enklet vad som ska hända när en reguest görs till olika url mot server.

          app.get('/', function(req, res) {
            res.sendFile(__dirname + 'index.html')
          });
        app.post('/getUser', function(req, res) {
            //console.log(data.body);
            var bodyStr = '';
            //console.log(chunk)
            req.on("data",function(chunk){
                bodyStr += chunk.toString();
                var data = bodyStr;
                console.log(data)
                if(data == "Thajo"){
                    console.log("JOhn")
                   res.send(JSON.stringify({"Skol-namn":data, "Github-namn":"thajo" }))
                }
                else if(data == "tstjo"){
                    console.log("Leitet")
                    res.send(JSON.stringify({"Skol-namn":data, "Github-namn":"Leitet" }))
                }
                else if(data == "mats"){
                    console.log("Mats Lock")
                    res.send(JSON.stringify({"Skol-namn":data, "Github-namn":"mtslck" }))
                }
                else if(data == "All"){
                    console.log("Alla användare")
                    res.send(JSON.stringify(
                        {
                            "John": {
                                "Skol-namn":"Thajo", 
                                "Github-namn":"thajo"
                            },
                            "Mats": { 
                                "Skol-namn":"mats", 
                                "Github-namn":"mtslck"
                            },

                            "Johan": {
                                "Skol-namn":"tstjo", 
                                "Github-namn":"Leitet"
                            }
                        }))
                }

          });
        })

        app.post('/webhook', function(req, res) {
            //console.log(data.body);
            var bodyStr = '';
            //console.log(chunk)
            req.on("data",function(chunk){
                bodyStr += chunk.toString();
                var data = bodyStr;
                console.log(data)
                  });
        })
        app.get('/getAllUser', function(req, res) {

              res.sendFile(__dirname + '/test.html');
          });


Detta är så man kan hantera parametrar som skickas med i anropet. i detta fall användarnamnen. Jag har dålig koll på vad saker na gör men jag tror den delar up det och sätter ihop det igen... typ

         var bodyStr = '';
                    //console.log(chunk)
                    req.on("data",function(chunk){
                        bodyStr += chunk.toString();
                        var data = bodyStr;

Här stället du man in var appliaktionen ligger port och så 

        app.listen(port, function() {
          console.log("Server up on "  + ipaddr+":" + port);
        });
        
        
#Finito

So jag sa i början, det finns ju riktga guider på nätet, googla på det