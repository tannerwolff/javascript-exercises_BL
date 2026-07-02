const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  if (num <= 1) return +num;

  let a = 0,
    b = 1;
  for (let i = 2; i <= num; i++) {
    let next = a + b;
    a = b;
    b = next;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
