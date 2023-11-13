// Create a function that returns true if all parameters are truthy, and false otherwise.

const allTruthy = (...args) => {
  return args.every((value) => Boolean(value));
};
