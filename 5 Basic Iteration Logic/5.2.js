'use strict';

const repeatStrFunc = (str, nRepeats) => str.repeat(nRepeats);

const repeatStrLoop = (str, nRepeats) => {
  let loger = '';

  for (let i = 0; i < nRepeats; i++) {
    loger += str;
  }

  return loger;
};

console.log(repeatStrFunc('hola! ', 4));
console.log(repeatStrLoop('Loop! ', 6));
