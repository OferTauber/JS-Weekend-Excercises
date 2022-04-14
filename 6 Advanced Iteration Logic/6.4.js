'use strict';

const isIsogram = (str) => {
  const set = new Set(str.toLowerCase().split(''));

  return set.size === str.length;
};

console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('aba')); // false
console.log(isIsogram('moOse')); // false
console.log(isIsogram('')); // true
