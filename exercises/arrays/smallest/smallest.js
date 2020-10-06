/* eslint-disable no-self-assign */
/* eslint-disable no-use-before-define */

/**
 * Given an array, returns the smallest element in the array.
 *
 * Assume the array contains only numbers.
 *
 * @param {number[]} array - The input array
 * @returns {number} The smallest element in the array
 */
function smallest(array) {
  let smallestSoFar= array[0];

  for (let element of array) {
    if (element < smallestSoFar) {
      smallestSoFar = element;
    }
  }

  return smallestSoFar;
}


if (require.main === module) {
  console.log('Running sanity checks for smallest:');

  console.log(smallest([1, 2, 3]) === 1);
  console.log(smallest([0, -100, 50, -200]) === -200);
  console.log(smallest([-200, -400, -100, -300]) === -400);
  console.log(smallest([0]) === 0);
  console.log(smallest([1]) === 1);
  console.log(smallest([-1]) === -1);
  console.log(smallest([11, 11, 11]) === 11);
  console.log(smallest([-22, -11, -22]) === -22);
}

module.exports = smallest;
