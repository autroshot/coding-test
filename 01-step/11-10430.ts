import fs = require('fs');

const inputs = fs.readFileSync('01-step/11-10430.txt').toString().split(' ');

const a = Number(inputs[0]);
const b = Number(inputs[1]);
const c = Number(inputs[2]);

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);
