'use strict';

const nbYear = (population0, popGrowth, emigration, populationN) => {
  let count = 0;
  const growthRate = popGrowth / 100 + 1;

  while (population0 < populationN) {
    population0 *= growthRate;
    population0 += emigration;
    count++;
  }

  return count;
};

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
