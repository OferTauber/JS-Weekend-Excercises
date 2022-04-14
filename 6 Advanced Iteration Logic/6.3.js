'use strict';
const longest = (str1, str2) => {
  const charsSet = new Set(str1.toLowerCase() + str2.toLowerCase());

  return Array.from(charsSet).sort().join('');
};

console.log(longest('daaaaaaaaaaaadd', 'dadadadada')); // ad
console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq')); // abcdefklmopqwxy
console.log(longest('abcdefghijklmnopqrstuvwxyz', 'a')); // abcdefghijklmnopqrstuvwxyz
