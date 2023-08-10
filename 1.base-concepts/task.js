"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = b**2 - 4*a*c;
  if (discr === 0) {
    arr.push(-b/2*a)
  }
  else if (discr > 0) {
    arr.push((-b + Math.sqrt(discr) )/(2*a));
    arr.push((-b - Math.sqrt(discr) )/(2*a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthly_percent = (percent/100)/12;
  let body = amount - contribution;
  let payment = body * (monthly_percent + (monthly_percent / (((1 + monthly_percent)**countMonths) - 1)));
  let result = payment * countMonths;
  return Number(result.toFixed(2));
}