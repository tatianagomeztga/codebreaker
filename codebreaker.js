var min = 0000;
var max = 10000;
var number = "";
var result= "";
var validar = "";

function generateNumber(){
  var n = Math.random() * (max-min) + min;
  n = Math.round(n);
  number = n.toString();
  return n;
}

function guessNumber(num){
  for(var j=0; j<4; j++){
    var nr = number.charAt(j);
    for(var i = 0; i<4; i++){
      var ni = num.charAt(i);
      if(nr == ni && j == i){        
        result += "X";
        i = 4;
      }else{
        if(nr == ni){
          result += "-";
          i = 4;
        }else{
        result += "";
        }
      }
    }
  }
  validar= result;
  result = "";
  return validar;
}
module.exports.guessNumber = guessNumber;
module.exports.generateNumber = generateNumber;