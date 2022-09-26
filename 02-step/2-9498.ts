import fs = require('fs');

const input = fs.readFileSync('02-step/2-9498.txt').toString();

const score = Number(input);

console.log(getGrade(score));

function getGrade(score: number): 'A' | 'B' | 'C' | 'D' | 'F' {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}
