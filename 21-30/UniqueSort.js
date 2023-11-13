// Given an array of numbers, write a function that returns an array that...
// Has all duplicate elements removed.
// Is sorted from least to greatest value.

const uniqueSort = (arr) => {
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => a - b);

  return uniqueArr;
};
