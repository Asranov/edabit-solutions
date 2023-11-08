// A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

const factorChain = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % arr[i - 1] !== 0) {
      return false;
    }
  }
  return true;
};
