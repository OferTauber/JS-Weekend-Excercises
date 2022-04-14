'use strict';

const countDupLetters = (str) => {
  const charsMapLikeObj = {};
  str
    .toLowerCase()
    .split('')
    .forEach((char) => {
      if (charsMapLikeObj[char] !== undefined) {
        charsMapLikeObj[char]++;
      } else {
        charsMapLikeObj[char] = 0;
      }
    });

  let dupCount = 0;
  for (const char in charsMapLikeObj) {
    charsMapLikeObj[char] && dupCount++;
  }

  return dupCount;
};

console.log(countDupLetters('abcde')); // 0
console.log(countDupLetters('aabbcde')); // 2
console.log(countDupLetters('aabBcde')); // 2
console.log(countDupLetters('indivisibility')); // 1
