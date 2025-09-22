/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalCost = 40;
  let sumPay = totalCost * days;

  if (days >= 7) {
    return sumPay - 50;
  } else if (days >= 3) {
    return sumPay - 20;
  }

  return sumPay;
}

module.exports = calculateRentalCost;
