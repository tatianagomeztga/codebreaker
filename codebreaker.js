var number = "1234";
var result="";
var validar ="";

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