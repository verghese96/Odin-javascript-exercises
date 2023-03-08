const reverseString = function(word) {
    var originalLetterCount = word.length;
    for (i=word.length-1;i>-1;i--){
        word +=word[i];
    }
    word = word.slice(word.length-originalLetterCount);
    return word;
    };
var word;

// Do not edit below this line
module.exports = reverseString;
