
function LetterChanges(str) { 
    let s, 
     newString = " ";
    
    for (var i=0; i <str.length; i++){
        if (96 < str.charCodeAt(i) && str.charCodeAt(i) < 123 ){
        newString += String.fromCharCode(str.charCodeAt(i) + 1);
            }
        }        
         
         s = newString.replace(/a|e|i|o|u/gi, function(vowel) { 
            return vowel.toUpperCase();
                });
             
             return s; 
         
}