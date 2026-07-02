const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  const final = arr.reduce((total, next) => {
    return total + next;
  }, 0);
  return final;
};

const multiply = function (arr) {
  const sumNums = arr.reduce((total, next) => (total *= next), 1);
  return sumNums;
};

const power = function (base, exp) {
  return base ** exp;
};

const factorial = function (num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
