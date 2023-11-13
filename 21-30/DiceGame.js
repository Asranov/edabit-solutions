// Create a function which takes in a matrix as input, and return John's score after his game has ended.

const diceGame = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === arr[i][1]) return 0;
    sum += arr[i][0] + arr[i][1];
  }

  return sum;
};
