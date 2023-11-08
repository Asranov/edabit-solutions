// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

const calculateTotalLoss = (obj) => {
  const totalLoss = Object.values(obj).reduce((sum, value) => sum + value, 0);

  return totalLoss > 0 ? totalLoss : "Lucky you!";
};
