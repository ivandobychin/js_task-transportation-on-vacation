/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceDay = 40;
  let sumPay = priceDay * days;

  if (days >= 7) {
    sumPay = sumPay - 50;
  } else if (days >= 3) {
    sumPay = sumPay - 20;
  }

  return sumPay;
}

module.exports = calculateRentalCost;
