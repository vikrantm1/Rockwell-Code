var express = require('express');
var path=require("path");
var fs=require("fs");
var app = express();


//server configuration
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function (req, res) {
   res.sendFile(path.join(___dirname + '/index.html'));
});
 

app.get('/hello', function (req, res) {
  console.log("Calling rest api");
  var person={firstName:'Vikrant',lastName:'Mandle',age:23};
  res.send(person);
});

 
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Rockwell automation app listening at 8081");
})