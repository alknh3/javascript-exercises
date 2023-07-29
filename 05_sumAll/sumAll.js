const sumAll = function(num1, num2) {
  if (typeof num1 !== 'number' | typeof num2 !== 'number') return "ERROR";
  if (num1 < 0 | num2 < 0) return "ERROR";

  let sum = 0;
  let small = Math.min(num1, num2);
  let big = Math.max(num1, num2); 

  for(let i = small; i <= big; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
