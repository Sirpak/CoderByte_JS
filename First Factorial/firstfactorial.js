firstfactorial.js


function FirstFactorial(num) { 

let fact=1;
let i;

if (num < 0) return "undefined";
for(  i=num; i>1; i--)
    fact*=i;
    return fact; 
}

   

   