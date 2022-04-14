'use strict';
const maskify = (userInput) => {
  let mask = '';
  const arr = (userInput + '').split('');

  while (arr.length > 4) {
    arr.shift();
    mask += '#';
  }

  return mask + arr.join('');
};

console.log(maskify(1111));
console.log(maskify(1111000));
console.log(maskify('1ffsdds00as111000'));
console.log(maskify(1));
