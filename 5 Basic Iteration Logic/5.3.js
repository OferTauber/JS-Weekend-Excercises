'use strict';

const toCamelCase = (str) => {
  return str
    .split(/[\-,\_]/g)
    .map((word, index) => {
      if (index) {
        const charArr = word.split('');
        charArr[0] = charArr[0].toUpperCase();
        return charArr.join('');
      }
      return word;
    })
    .join('');
};

console.log(toCamelCase('The_Stealth_Warrior'));
