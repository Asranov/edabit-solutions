// Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.

const boxSeq = (step) => {
  if (step === 0) {
    return 0;
  } else if (step % 2 === 1) {
    return boxSeq(step - 1) + 3;
  } else {
    return boxSeq(step - 1) - 1;
  }
};
