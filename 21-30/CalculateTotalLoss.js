// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

const calculateTotalLoss = (stolenItems) => {
  const values = Object.values(stolenItems);
  if (values.length === 0) {
    return "Lucky you!";
  } else {
    return values.reduce((total, value) => total + value, 0);
  }
};
