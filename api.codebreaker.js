const express = require("express");
const app = express();
const codebreaker = require('./code-breaker');
const cors = require("cors")

app.use(cors())

app.get('/api/randomNumber', function(req, res) {
  let number = codebreaker.generateNumber();
  res.json({ ramdonNumber: number })
})

app.get('/api/guessNumber', function(req, res) {
  var queryParameter = req.query;
  n = queryParameter.number.toString();
  var result = codebreaker.guessNumber(n);
  if (result != ""){
    res.json({ mensaje: result })
  }else{
    res.json({ mensaje: "Sigue intentando"})
  }
  
})

//exports app module
module.exports = app;