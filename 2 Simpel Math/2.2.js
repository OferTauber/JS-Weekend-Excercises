'use strict';

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// console.log(parseInt(01, 2));

const convertBinArrToInt = (arr) => parseInt(arr.join('') * 1, 2);

const bin15Arr = [1, 1, 1, 1];
const bin1Arr = [0, , 0, 1];
const bin32Arr = [0, 1, 0, 0, 0, 0, 0];

console.log(convertBinArrToInt(bin15Arr));
console.log(convertBinArrToInt(bin1Arr));
console.log(convertBinArrToInt(bin32Arr));
