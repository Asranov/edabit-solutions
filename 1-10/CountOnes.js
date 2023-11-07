// Create a function to count the number of 1s in a 2D array.

const countOnes = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 1) {
        count++;
      }
    }
  }

  return count;
};
