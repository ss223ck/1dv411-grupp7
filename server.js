const http = require('http');
const express = require('express');
const app = express();
const port = '5000';
const ipadress= 'http://localhost';

app.use(express.static(__dirname + '/'));

app.get('/',function(req, res){
   res.sendFile(__dirname + 'index.html'); 
});


app.listen(port,function(){
    console.log('listen on ' + ipadress+':' + port);
})