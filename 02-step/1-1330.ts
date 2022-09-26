import fs = require('fs');

const inputs = fs.readFileSync('02-step/1-1330.txt').toString().split(' ');

const num1 = Number(inputs[0]);
const num2 = Number(inputs[1]);

if (num1 < num2) {
  console.log('<');
} else if (num1 > num2) {
  console.log('>');
} else {
  console.log('==');
}
