const convertToCelsius = function(tempInFahrenheit) {
  let rawTempInCelsius = ((tempInFahrenheit - 32) * (5 / 9));
  let roundedTempInCelsius = Math.round(rawTempInCelsius * 10) / 10;
  return roundedTempInCelsius;
};

const convertToFahrenheit = function(tempInCelsius) {
  let rawTempInFahrenheit = (tempInCelsius * (9 / 5) + 32)
  let roundedTempInFahrenheit = Math.round(rawTempInFahrenheit * 10) / 10;
  return roundedTempInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
