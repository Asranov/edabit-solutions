// John is playing a dice game. The rules are as follows.

// Roll two dice.
// Add the numbers on the dice together.
// Add the total to your overall score.
// Repeat this for three rounds.
// Create a function which takes in a matrix as input, and return John's score after his game has ended.

const diceGame = (arr) => {
  let score = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === arr[i][1]) {
      return 0;
    } else {
      score += arr[i][0] + arr[i][1];
    }
  }

  return score;
};
