function kapConstant(num) { 
  var descend,
  	  ascend,
  	  myNum,
  	  count=0,
  	  numArr;
  
  function recur(myNum){
    count++
    descend = Number(String(myNum).split('').sort(function(a,b){return b-a}).join('')); 
    ascend = Number(String(myNum).split('').sort(function(a,b){return a-b}).join(''));
    myNum = descend - ascend;
    
    if(myNum === 6174){
      return count; 
    }
    
    numArr = String(myNum).split('');
    while(numArr.length < 4){
      numArr.push(0);
    }
    myNum = Number(numArr.join(''));
    return recur(myNum);
  }
  return recur(num);
}
   


console.log(kapConstant(2111));
console.log(kapConstant(9831));
console.log(kapConstant(3524));
console.log(kapConstant(8774));
console.log(kapConstant(1121));
