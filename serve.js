const api = require("./api.codebreaker");

var port = process.env.PORT || 3000  

api.listen(port, () =>{
  console.log('API escuchando en el puerto ' + port)
})