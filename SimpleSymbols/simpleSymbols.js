

function SimpleSymbols(str) { 
    let reg = /[a-z]/gi;
    let letterAmount = str.match(reg).length;
    let matchCount = 0;
    
    let splitStr = str.split("");
    
    for ( let i =0; i<splitStr.length; i++){
        if (splitStr[i].match(reg) && splitStr[i-1] === '+' && splitStr[i+1] === '+') {
            matchCount++;
        }
    }
  
  return letterAmount === matchCount; 
         
}