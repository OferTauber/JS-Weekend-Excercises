'use strict';

// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.

const abbreviateTwoWords = (name) => {
  const arr = name.split('');

  return arr[0].charAt(0).toUpperCase() + '.' + arr[1].charAt(0).toUpperCase();
};

console.log(abbreviateTwoWords('ofer tauber'));
console.log(abbreviateTwoWords('Ofer Tauber'));
