'use strict';

const trim = (string) => string.split('').slice(1, -1).join('');

console.log(trim('hello'));
console.log(trim('hello, hello, hello!'));
