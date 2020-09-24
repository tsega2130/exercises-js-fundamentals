/**
 * Given two positive, `n` and `d`, returns the remainder of `n` after
 * dividing by `d`.
 *
 * Do not use the built-in modulo operator (`%`). The goal is to gain
 * insight into how the modulo operator works.
 *
 * @example
 * remainderOf(10, 1); // => 0
 * remainderOf(10, 2); // => 0
 * remainderOf(10, 3); // => 1
 * remainderOf(10, 4); // => 2
 * remainderOf(129, 17); // => 10
 *
 * @param {number} num The input number
 * @returns {boolean} True if num is even and false otherwise
 */
function remainderOf(n, d) {
  /*q= Math.floor(n/d);
  p= q*d 5= n 2=d
  return n-p;   
  
  if (n===0) {
    return 0 
  } 
    else if ((n-d)<0){ 
    return n
    }
    else { 
  return (remainderOf((n-d), d));
  }
  */

 if (n===0) {  
    return n;
  } 
    else if ((n-d)<0) {
    return n;
  }
  else { 
  return (remainderOf((n-d), d));
  }
}

if (require.main === module) {
  console.log('Running sanity checks for remainderOf');
  console.log(remainderOf(4,2));
  console.log(remainderOf(15,20));


  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = remainderOf;
