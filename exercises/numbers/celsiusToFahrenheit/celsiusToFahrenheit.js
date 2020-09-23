/**
 * Given a temperature in Celsius, return the temperature in Fahrenheit.
 *
 * @param {number} temp - The temperature in Celsius
 * @returns {boolean} The temperature in Fahrenheit
 */
function celsiusToFahrenheit(temp) {
  return ((9/5)*temp+32);
}

if (require.main === module) {
  console.log('Running sanity checks for celsiusToFahrenheit:');
  console.log(celsiusToFahrenheit(0));
}

module.exports = celsiusToFahrenheit;
