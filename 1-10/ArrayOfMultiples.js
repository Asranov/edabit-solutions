// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

const arrayOfMultiples = (num, length) => {
  const numbers = [];

  for (let i = 1; i <= length; i++) {
    numbers.push(num * i);
  }

  return numbers;
};
