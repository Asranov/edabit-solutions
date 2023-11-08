// Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays (e.g. [[], [], []]), each containing y number of item z.

const matrix = (x, y, z) => {
  const result = [];

  for (let i = 1; i <= x; i++) {
    result.push([]);
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = 1; j <= y; j++) {
      result[i].push(z);
    }
  }

  return result;
};
