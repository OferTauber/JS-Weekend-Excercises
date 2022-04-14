'use strict';

const tribonacciNusingForLoop = (signatureArr, n) => {
  if (!n) {
    return [];
  }

  const copyOfSignatureArr = [...signatureArr];
  for (let i = 0; i < n; i++) {
    copyOfSignatureArr[i + 3] =
      copyOfSignatureArr[i + 2] +
      copyOfSignatureArr[i + 1] +
      copyOfSignatureArr[i];
  }

  return copyOfSignatureArr[n];
};

console.log(tribonacciNusingForLoop([0, 0, 1], 0)); // []
console.log(tribonacciNusingForLoop([0, 0, 1], 1)); // 0
console.log(tribonacciNusingForLoop([0, 1, 1], 1)); // 1
console.log(tribonacciNusingForLoop([0, 1, 1], 2)); // 1
console.log(tribonacciNusingForLoop([0, 1, 1], 2)); // 1
console.log(tribonacciNusingForLoop([0, 0, 1], 6)); // 7
console.log(tribonacciNusingForLoop([1, 1, 1], 6)); // 17
