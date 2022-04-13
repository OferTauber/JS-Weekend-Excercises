'use strict';

const basicOp = (operation, num1, num2) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
};

console.log(basicOp('-', 3, 1));
console.log(basicOp('+', 3, 1));
console.log(basicOp('*', 3, 2));
console.log(basicOp('/', 3, 2));
