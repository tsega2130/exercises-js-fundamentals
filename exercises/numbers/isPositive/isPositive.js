/**
 * Returns true if the given number is positive (greater than 0) and false otherwise.
 *
 * @param {number} num The input number
 * @returns {boolean} True if num is positive and false otherwise
 */
function isPositive(num) {
  // The _____ is meant to be "fill in the blank"
  // Look at isZero and compare; what makes sense here?
  if (num>0) { 
    return console.log(true) 
  } else { console.log(false) 
  
  }
}

if (require.main === module) {
  console.log('Running sanity checks for isPositive:');

  console.log(isPositive(9))
  console.log(isPositive(10928))
  console.log(isPositive(-382))
}

module.exports = isPositive;
