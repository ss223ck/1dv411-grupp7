var http = require("http");
var express = require("express"), app = express()
  , port = "5000"
  , ipaddr = 'http://xn--dagsfrkaffe-vfb.nu/';
app.use(express.static(__dirname + '/'));

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




app.listen(port, function() {
  console.log("Server up on "  + ipaddr+":" + port);
});