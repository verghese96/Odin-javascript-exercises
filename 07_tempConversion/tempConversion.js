const convertToCelsius = function(temp) {
  let F=(temp-32)*(5/9);
  temp= Math.round(F * 10) / 10; //Round off to 1 decimal place
  return temp;
};

const convertToFahrenheit = function(temp) {
  let C=(temp*(9/5)+32);
  temp= Math.round(C * 10) / 10; //Round off to 1 decimal place
  return temp;
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
