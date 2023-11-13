// Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays (e.g. [[], [], []]), each containing y number of item z.
// x Number of subarrays contained within the main array.
// y Number of items contained within each subarray.
// z Item contained within each subarray.

const matrix = (x, y, z) => {
  const result = [];
  for (let i = 0; i < x; i++) {
    const subarray = [];
    for (let j = 0; j < y; j++) {
      subarray.push(z);
    }
    result.push(subarray);
  }
  return result;
};
