const uniqueSort = (arr) => {
  const uniqueElements = new Set(arr);

  const sortedArray = [...uniqueElements].sort((a, b) => a - b);

  return sortedArray;
};
