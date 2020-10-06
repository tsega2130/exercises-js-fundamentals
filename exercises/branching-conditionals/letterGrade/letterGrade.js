/**
 * Given a numerical grade from 0 to 100, return a letter grade.
 *
 * The minus/plus cutoffs are at 2 and 6, respectively. For example,
 * 80-82 is a B-, 83-86 is a B, and 87-89 is a B+. Anything below 60 is an F.
 *
 * @example
 * letterGrade(50); // => 'F'
 * letterGrade(70); // => 'C-'
 * letterGrade(89); // => 'B+'
 * 
 * @param {number} percentGrade - A number between 0 and 100 (inclusive), representing
 *  a student's percentage grade.
 * @return {string} The corresponding letter grade for the given percentage grade
 */

function letterGrade(percentGrade) {
  if (percentGrade < 60) {
    return "F"
  } else if (percentGrade >= 60 && percentGrade <= 62) {
    return "D-" 
  } else if (percentGrade >= 63 && percentGrade <= 66) {
    return "D"
  } else if (percentGrade >= 67 && percentGrade <= 69) {
    return "D+"
  } else if (percentGrade >= 70 && percentGrade <= 72) {
    return "C-"
  } else if (percentGrade >= 73 && percentGrade <= 76) { 
    return "C" 
  } else if (percentGrade >= 77 && percentGrade <= 79) { 
    return "C+"
  } else if (percentGrade >= 80 && percentGrade <= 82) {
    return "B-"
  } else if (percentGrade >= 83 && percentGrade <= 86) {
    return "B"
  } else if (percentGrade >= 87 && percentGrade <= 89) {
    return "B+"
  } else if (percentGrade >= 90 && percentGrade <= 92) {
    return "A-"
  } else if (percentGrade > 93) {
    return "A"
  }
}



if (require.main === module) {
  console.log('Running sanity checks for letterGrade:');
  console.log(letterGrade (60) === "D-");
  console.log(letterGrade (84) === "B");
  console.log(letterGrade (94) === "A");
}

module.exports = letterGrade;
