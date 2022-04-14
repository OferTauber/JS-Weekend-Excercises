'use strict';

const toWeirdCase = (str) => {
  return str
    .split(' ')
    .map((word) => {
      return word
        .split('')
        .map((char, index) => {
          return index % 2 ? char.toLowerCase() : char.toUpperCase();
        })
        .join('');
    })
    .join(' ');
};

console.log(toWeirdCase('Weird string case"'));
