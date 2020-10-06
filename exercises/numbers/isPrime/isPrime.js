/**
 * Returns true if the given positive integer is prime and false otherwise.
 *
 * A positive integer is prime if it its only factors are 1 and itself.
 *
 * See https://en.wikipedia.org/wiki/Prime_number
 *
 * Primes: 2, 3, 5, 7, 11, 13, 17, ...
 *
 * @param {number} num - The positive integer whose primality we want to check
 * @returns {boolean} True if num is prime and false otherwise
 *
 * Prime num must be present in multiplication 
 * 5x1= 5 
 * if num is present in one of two arguements and is same as product then its prime ?syntax?
 * 
 */

function isPrime(num) {
  if (num/1 === num && num/num === Number) {
    return true 
  } else {
    return false
  }
}

if (require.main === module) {
  console.log('Running sanity checks for isPrime:');

  console.log(isPrime(1));
  console.log(isPrime(2));
  console.log(isPrime(4));

  // Your own sanity checks go here
}

module.exports = isPrime;
