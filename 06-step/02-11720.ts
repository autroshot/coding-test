import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers: number[] = [];
let lineCount = 0;
rl.on('line', (line) => {
  if (lineCount === 0) {
    lineCount += 1;
  } else {
    numbers = line.split('').map((input) => Number(input));
  }
}).on('close', () => {
  console.log(numbers.reduce((sum, number) => (sum += number)));

  process.exit();
});
