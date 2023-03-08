const repeatString = function(string,num) {
    if (num<0){
        return "ERROR";
    }
    var phrase ="";
    for(i=0;i<num;i++){
        phrase +=string;
    }   
    return phrase;
}
// Do not edit below this line
module.exports = repeatString;
