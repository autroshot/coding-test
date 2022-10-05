import fs = require('fs');
const inputs = fs
  .readFileSync('07-step/1-1712.txt')
  .toString()
  .split(' ')
  .map((input) => Number(input));

let a = inputs[0];
let b = inputs[1];
let c = inputs[2];

a = inputs[0];
b = inputs[1];
c = inputs[2];
if (b >= c) {
  console.log(-1);
} else {
  console.log(Math.ceil(a / (c - b)) + 1);
}
