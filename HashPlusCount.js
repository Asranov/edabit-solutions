// Create a function that returns the number of hashes and pluses in a string.

const hashPlusCount = (str) => {
  let hashCount = 0;
  let plusCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "#") {
      hashCount++;
    } else if (str[i] === "+") {
      plusCount++;
    }
  }

  return [hashCount, plusCount];
};
