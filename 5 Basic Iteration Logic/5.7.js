'use strict';

//* Simple, given a string of words, return the length of the shortest word(s).
//* String will never be empty and you do not need to account for different data types.

const shortestWordLength = (string) => {
  return Math.min(...string.split(' ').map((word) => word.length));
};

console.log(shortestWordLength('h')); // 1
console.log(shortestWordLength('Hellow World!')); // 6
console.log(shortestWordLength('Hellow-World!')); // 13
console.log(shortestWordLength('10aaaaaaaa 4ddd 2f 5fkdm')); // 2
