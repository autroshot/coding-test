import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers: number[] = [];
let lineCount = 0;
rl.on('line', (line) => {
  if (lineCount < 9) {
    numbers.push(Number(line));
    lineCount += 1;
  }
}).on('close', () => {
  let maxValue = 0;
  let maxIndex = 0;

  numbers.forEach((number, index) => {
    if (number > maxValue) {
      maxValue = number;
      maxIndex = index;
    }
  });

  console.log(maxValue);
  console.log(maxIndex + 1);

  process.exit();
});
