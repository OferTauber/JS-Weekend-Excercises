'use strict';

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No"
// string for false.

const objWithAMethod = {
  yesOrNoString(bool) {
    return bool ? 'Yes' : 'No';
  },
};

console.log(objWithAMethod.yesOrNoString(true));
console.log(objWithAMethod.yesOrNoString(false));
