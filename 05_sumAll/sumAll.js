var num1;
var num2;
const sumAll = function(num1,num2) {
    if (num1>num2){ 
    var temp = num2;
    num2=num1;
    num1=temp;    
    }

    if (typeof num1=='number' && typeof num2=='number' && num1>0  && num2>0 ){
        if (num1%2==0 && num2%2==0){
            return ((num1+num2)*(num2/2));
        }
        else {
            return (((num1+num2-1)*((num2-1)/2)) + num2)
        }
    }

    else {
    return 'ERROR';
    }
};
// console.log(sumAll(100,1));
// Do not edit below this line
module.exports = sumAll;
