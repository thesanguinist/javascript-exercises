const convertToCelsius = function(degFar) {
  newDegCel = (degFar - 32) * (5 / 9);
  if (newDegCel % 1 == 0) {
  return (newDegCel);
  } else {
    newDegCel = newDegCel.toFixed(1)
  } return parseFloat(newDegCel);
};

const convertToFahrenheit = function(degCel) {
  newDegFar = ((degCel * 9 / 5) + 32);
  if (newDegFar % 1 == 0){
    return (newDegFar);
  } else {
    newDegFar = newDegFar.toFixed(1)
  return parseFloat(newDegFar);
}
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
