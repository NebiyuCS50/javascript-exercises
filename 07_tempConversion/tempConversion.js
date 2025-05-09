const convertToCelsius = function(deg) {
  const result = (deg-32)*5/9;
  const roundResult = Math.round(result*10)/10;
  return roundResult;
};

const convertToFahrenheit = function(deg) {
  const result = (deg*9/5+32);
  const roundResult = Math.round(result*10)/10;
  return roundResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
