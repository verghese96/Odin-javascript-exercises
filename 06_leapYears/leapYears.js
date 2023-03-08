var year;
// var year=1996;
const leapYears = function(year) {
    if (typeof year=='number'){
        if (year%400==0 && year%4==0){
            return true;
        }
        else if (year%100!=0 && year%4==0){
            return true;
        }
        else {
            return false;
            }
        }
    else {
        return 'ERROR';
    }
};
// console.log(leapYears(1996));
// console.log(year%4==0 && year%100!=0);
// console.log('hi');

//Leap years are years divisible by four (like 1984 and 2004). 
//However, years divisible by 100 are not leap years (such as 1800 and 1900) 
//unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).

// Do not edit below this line
module.exports = leapYears;
