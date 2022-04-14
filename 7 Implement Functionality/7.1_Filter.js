'use strict';

const Filter = (array, callback) => {
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) newArr.push(array[i]);
  }

  return newArr;
};

//! comper function
const arrsAreIdent = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

//! test cases
const ages = [32, 4, 33, 16, 40, 12, 18];
function checkAdult(age) {
  return age >= 18;
}

console.log(arrsAreIdent(ages.filter(checkAdult), Filter(ages, checkAdult))); //true
console.log(arrsAreIdent([].filter(checkAdult), Filter([], checkAdult))); //true
