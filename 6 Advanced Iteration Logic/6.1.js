'use strict';

const accum = (str) => {
  const charsArr = str.toUpperCase().split('');
  return charsArr
    .map((char, index) => {
      return char + char.toLowerCase().repeat(index);
    })
    .join('-');
};

//! The parameter of accum is a string which includes only letters from a..z and A..Z .

console.log(accum('abcd')); // "A-Bb-Ccc-Dddd"
console.log(accum('RqaEzty')); // "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
console.log(accum('cwAt')); // "C-Ww-Aaa-Tttt"
