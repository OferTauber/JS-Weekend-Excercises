'use strict';

const loopFibonacci = (n) => {
  let fibonacciN = 1;
  let fibonacciNPlus1 = 1;
  let swapTemp;

  for (let i = 1; i < n; i++) {
    // swap
    swapTemp = fibonacciNPlus1;
    fibonacciNPlus1 = fibonacciN;
    fibonacciN = swapTemp;

    fibonacciNPlus1 += fibonacciN;
  }

  return fibonacciNPlus1;
};

const recursiveFibonacci = (n) => {
  if (n === 1 || n === 0) return 1;

  return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
};

console.log(loopFibonacci(7));
console.log(recursiveFibonacci(7));
