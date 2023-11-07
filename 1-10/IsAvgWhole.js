// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

const isAvgWhole = (arr) => {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / arr.length;

  return Number.isInteger(average);
};
