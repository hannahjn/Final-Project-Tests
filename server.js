var express = require('express')
  , http = require('http')
  , app = express();
var path = require('path');

app.get('/',function(req,res){
 res.sendFile(path.join(__dirname + '/ar.js_test.html'));
})

var port = 8000;

app.listen(port, '0.0.0.0', function() {
        console.log("Connected on: " + port)
})