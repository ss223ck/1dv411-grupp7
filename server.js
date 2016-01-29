const http = require('http');
const express = require('express');
const app = express();
const port = process.env.PORT;
const ipadress= process.env.IP;

app.use(express.static(__dirname + '/'));

app.get('/',function(req, res){
   res.sendFile(__dirname + 'index.html'); 
});


app.listen(port,function(){
    console.log('listen on' + ipadress+':' + port)
})