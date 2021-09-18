const codebreaker = require('./codebreaker');

describe(' Operations', () =>{
  test(' 1234 to equals XXXX', () => {
    var result = codebreaker.guessNumber("1234");
    expect(result).toBe("XXXX");
  })
  test(' 1234 to equals XXXX', () => {    
    var result = codebreaker.guessNumber("1234");
    expect(result).toBe("XXXX");
  })
  test(' 5678 to equals "" ', () => {
    var result = codebreaker.guessNumber("5678");
    expect(result).toBe("");
  })
  test(' 1765 to equals "X" ', () => {
    var result = codebreaker.guessNumber("1765");
    expect(result).toBe("X");
  })
  test(' 2876 to equal "-"', () =>{
    var result = codebreaker.guessNumber("2876");
    expect(result).toBe("-");
  })
  test(' 1265 to equal "XX"', () =>{
    var result = codebreaker.guessNumber("1265");
    expect(result).toBe("XX");
  })
  test(' 2398 to equal "--"', () =>{
    var result = codebreaker.guessNumber("2398");
    expect(result).toBe("--");
  })
  test(' 1247 to equal "XX-"', () =>{
    var result = codebreaker.guessNumber("1247");
    expect(result).toBe("XX-");
  })
  test(' 2384 to equal "--X"', () =>{
    var result = codebreaker.guessNumber("2384");
    expect(result).toBe("--X");
  })
  test(' 1432 to equal "X-X-"', () =>{
    var result = codebreaker.guessNumber("1432");
    expect(result).toBe("X-X-");
  })
  test(' 4321 to equal "----"', () =>{
    var result = codebreaker.guessNumber("4321");
    expect(result).toBe("----");
  })
  test(' 1111 to equal "X"', () =>{
    var result = codebreaker.guessNumber("1111");
    expect(result).toBe("X");
  })
  
})