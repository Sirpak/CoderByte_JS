longestword.js


function LongestWord(sen) { 

    let senSeperate = sen.replace(/[^a-zA-Z]+/g, " ").split(' ');
    let longWord = 0;
    let bigWord;

    for (let x=0; x < senSeperate.length; x++){
        if (senSeperate[x].length > longWord){
            bigWord = senSeperate[x];
            longWord = senSeperate[x].length;
        } 

    }
return bigWord; 
}

