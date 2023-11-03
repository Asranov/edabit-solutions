const numberSplit = (n) => {
  if (n % 2 == 0) {
    const half = n / 2;
    return [half, half];
  } else {
    const leftHalf = Math.floor(n / 2);
    const rightHalf = leftHalf + 1;
    return [rightHalf, leftHalf];
  }
};
