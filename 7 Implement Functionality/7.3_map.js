'use strict';

const myMap = (array, callback) => {
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i]));
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

const data = [
  { name: 'Tod', age: 29, gender: 'M' },
  { name: 'Sara', age: 22, gender: 'F' },
  { name: 'M<ike', age: 42, gender: 'M' },
  { name: 'Lee', age: 19, gender: 'F' },
];

const getName_Callback = (obj) => obj.name;

console.log(
  arrsAreIdent(data.map(getName_Callback), myMap(data, getName_Callback))
);
