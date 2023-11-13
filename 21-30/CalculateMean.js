// Create a function that returns the mean of all digits.

const mean = (num) => {
  const numStr = num.toString();
  let sum = 0;
  let count = 0;
  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i], 10);
    sum += digit;
    count++;
  }
  return Math.floor(sum / count);
};
