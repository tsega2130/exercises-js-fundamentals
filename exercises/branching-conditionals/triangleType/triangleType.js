/**
 * Given the the length of three triangle sides, returns the triangle's type as a string, i.e.,
 * `'acute'`, `'right'`, `'obtuse'`, or `'invalid'`.
 *
 * See https://www.murrieta.k12.ca.us/cms/lib5/CA01000508/Centricity/Domain/1830/T4.5.pdf
 *
 * If a triangle can't be formed from the three side lengths then return `'invalid'`.
 * 
 * //Couple of typos, also shouldn't the order of arguments matter?
 * 
 * @example
 * triangleType(3, 4, 5); // => 'right'
 * triangleType(4, 3, 5); // => 'right' (the order of arguments shouldn't matter)
 * triangleType(1, 1, 1); // => 'acute'
 * triangleType(12, 15, 8); // => 'obtuse'
 * triangleType(1, 1, 3); // => 'invalid'
 *
 * @param {number} a Side length #1
 * @param {number} b Side length #2
 * @param {number} c Side length #3
 * @return {number} 
 */
function triangleType (a, b, c) {
 if ((a**2) + (b**2) === (c**2)) {
   return "right angle"
 } else if ((a**2) + (b**2) > (c**2)) {
   return "acute angle"
 } else if ((a**2) + (b**2) < (c**2)) {
   return "obtuse angle"
 } else { 
   return "invalid"
 }
}

if (require.main === module) {
  console.log('Running sanity checks for triangleType:');
  console.log(triangleType(3, 4, 5));
  console.log(triangleType(5, 4, 1));
}

module.exports = triangleType;
