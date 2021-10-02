const codebreaker = require('./codebreaker');
const express = require("express");
const app = express();
var x = "";

var port = process.env.PORT || 8080  

app.get('/api/randomNumber', function(req, res) {
  let number = codebreaker.generateNumber();
  let x = number;
  res.json({ ramdonNumber: number })
})

app.get('/api/guessNumber', function(req, res) {
  var queryParameter = req.query;
  n = queryParameter.number.toString();
  var result = codebreaker.guessNumber(n);
  res.json({ mensaje: result })
})

app.listen(port, () =>{
  console.log('API escuchando en el puerto ' + port)
})