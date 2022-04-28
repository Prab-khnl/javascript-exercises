const reverseString = function(word) {
    
    let intermediate = [];
    for (let i =0 ; i < word.length ; i++) {
        let req= word[i];
        intermediate.unshift(req);
    }
    let finalOuput = intermediate.join('');
        console.log(finalOuput);
       return finalOuput;

}

// Do not edit below this line
module.exports = reverseString;
