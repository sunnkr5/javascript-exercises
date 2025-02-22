const convertToCelsius = function(tempInFahrenheit) {
      let tempInCelsius = (tempInFahrenheit - 32) * 5 / 9;
    return Math.round(tempInCelsius);
}
console.log(convertToCelsius(32));

const convertToFahrenheit = function(tempInCelsius) {
  let tempInFahrenheit = (tempInCelsius * 9 / 5 + 32);
  return Math.round(tempInFahrenheit);
};

console.log(convertToFahrenheit(0));



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
