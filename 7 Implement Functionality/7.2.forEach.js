'use strict';

const ForEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = callback(array[i]);
  }
};

//! comper function
const arrsAreIdent = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const ToUpperCase = (str, index) => (str = str.toUpperCase());

const chars = ['a', 'D', 'g', 'E', 'pDpD'];
const charsDup = [...chars];

ForEach(chars, ToUpperCase);
charsDup.forEach((char) => (char = char.toUpperCase()));

console.log(chars);
console.log(charsDup);

console.log(arrsAreIdent(chars, charsDup)); //true
