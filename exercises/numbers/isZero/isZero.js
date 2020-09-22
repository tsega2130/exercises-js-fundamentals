/**
 * Returns true if the given number is 0 and false otherwise
 *
 * @param {number} num - The input number
 * @returns {boolean} True if num is 0 and false otherwise
 */
function isZero(num) {
  return num === 0;
}

/* Google Docs link to notes: https://docs.google.com/document/d/15KH1Ge0hN1FgRkpiNOyaN-30DiCB4oe44_nRJQVpq2s/edit
From variety of online sources and also intro-js repository 
Defintely focused too much syntax, switch to modeling 
*/

if (require.main === module) {
  console.log('Running Sanity checks for isZero:');

  console.log(isZero(0) === true);
  console.log(isZero(1) === false);
  console.log(isZero(-1) === false);
  console.log(isZero(-100.201) === false);
}

module.exports = isZero;
