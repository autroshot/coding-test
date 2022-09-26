import fs = require('fs');

const inputs = fs.readFileSync('01-step/12-2588.txt').toString().split('\r\n');

const num1 = Number(inputs[0]);
const str2 = inputs[1];

const num2Numbers: number[] = [];
for (let i = 0; i < str2.length; i++) {
  num2Numbers.push(Number(str2[i]));
}
num2Numbers.reverse();

const multiplyResults = num2Numbers.map((number) => number * num1);

const sumResult = multiplyResults.reduce(
  (previousValue, multiplyResult, index) => {
    return previousValue + multiplyResult * Math.pow(10, index);
  },
  0
);

multiplyResults.forEach((multipliedResult) => console.log(multipliedResult));
console.log(sumResult);
