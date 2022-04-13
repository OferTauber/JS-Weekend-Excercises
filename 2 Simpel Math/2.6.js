'use strict';

const centuryFromYear = (year) => {
  return Math.floor((year - 1) / 100) + 1;
};

console.log(centuryFromYear(2021));
console.log(centuryFromYear(1980));
console.log(centuryFromYear(705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1901));
