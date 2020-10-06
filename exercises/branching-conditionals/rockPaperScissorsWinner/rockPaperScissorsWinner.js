/**
 * Given two numbers representing two players' moves in a game of rock,
 * paper, scissors, return whether the first player's move was a win,
 * loss, or draw.
 *
 * To play, two people count off to three. On the count, each hold out their
 * hand in the shape of a rock, a piece of paper, or a pair of scissors. Scissors
 * beats paper, paper beats rock, and rock beats scissors. If both players play
 * the same item, it's a draw.
 *
 * See https://en.wikipedia.org/wiki/Rock_paper_scissors
 *
 * //typos in the instructions 
 * 
 * We will represent 
 * scissors  number 0, 
 * paper number 1,
 * rock number 2.
 *
 * @example
 * rockPaperScissorsWinner(0, 1); // => 'win' (scissors beats paper)
 * rockPaperScissorsWinner(1, 0); // => 'lose' (paper loses to scissors)
 * rockPaperScissorsWinner(1, 2); // => 'win' (paper beats rock)
 * rockPaperScissorsWinner(2, 2); // => 'draw' (both players played rock)
 * 
 * rockPaperScissorsWinner(1, 1); // => 'draw' (both players played paper)
 * rockPaperScissorsWinner(0, 0); // => 'draw' (both players played scissors)
 *
 * @param {number} firstPlayerMove - The first player's move
 * @param {number} secondPlayerMove - The second player's move
 * @returns {string} Returns 'win', 'lose', or 'draw' depending on
 *  whether the first player won, lost, or drew the match.
 */
function rockPaperScissorsWinner(firstPlayerMove, secondPlayerMove) {
  
  if (firstPlayerMove === 1 && secondPlayerMove === 0) {
    return "Lose"
  } else if ( firstPlayerMove === 0 && secondPlayerMove === 1 || firstPlayerMove === 1 && secondPlayerMove === 2) {
    return "Win"
  } else if (firstPlayerMove > 2 || secondPlayerMove > 2) {
    return "Sorry, that is not an accepted input"
  } else { 
    return "Draw"
  }
}

if (require.main === module) {
  console.log('Running sanity checks for rockPaperScissorsWinner:');
  console.log(rockPaperScissorsWinner(0, 0));
  console.log(rockPaperScissorsWinner(1, 0));
  console.log(rockPaperScissorsWinner(2, 0));
  console.log(rockPaperScissorsWinner(2, 5));
  console.log(rockPaperScissorsWinner(2, 0));
}

module.exports = rockPaperScissorsWinner;
