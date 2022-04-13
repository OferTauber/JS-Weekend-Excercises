'use strict';
// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

const sumTwoLowest = (intsArr) => {
  // const arrDup = [...intsArr];
  const minInt = Math.min(...intsArr);
  const minintIndex = intsArr.indexOf(minInt);
  const secondMinInt = Math.min(
    ...intsArr.slice(0, minintIndex),
    ...intsArr.slice(1 + minintIndex, intsArr.length - 1)
  );

  return minInt + secondMinInt;
};

console.log([1, 2, 3].indexOf(2));
console.log(sumTwoLowest([1, 2, 200, 400, 30]));
console.log(sumTwoLowest([1, 1, 2, 200, 400, 30]));
console.log(sumTwoLowest([100, 21, 2, 200, 2, 400, 30]));
console.log(sumTwoLowest([10, 343445353, 3453445, 3453545353453]));
