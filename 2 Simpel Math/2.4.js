'use strict';

// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

const findUniq = (arr) => {
  if (arr[0] !== arr[1] && arr[0] !== arr[2]) return arr[0];

  return arr.find((int) => int !== arr[0]);
};

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
console.log(findUniq([7, 0.4, 0.4, 0.4, 0.4]));
