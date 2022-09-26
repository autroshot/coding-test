import fs = require('fs');

const input = fs.readFileSync('02-step/3-2753.txt').toString();
const year = Number(input);

console.log(isLeapYear(year) ? 1 : 0);

function isLeapYear(year: number): boolean {
  if (year % 400 === 0) return true;
  if (year % 4 === 0 && year % 100 !== 0) return true;
  return false;
}
