// Create a function that returns the mean of all digits.

const mean = (num) => {
  num = Math.abs(num);
  let sum = 0;
  let digitCount = 0;

  while (num > 0) {
    const digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
    digitCount++;
  }

  return Math.floor(sum / digitCount);
};
