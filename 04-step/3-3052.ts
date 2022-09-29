import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers: number[] = [];
let lineCount = 0;
rl.on('line', (line) => {
  if (lineCount < 10) {
    numbers.push(Number(line));
    lineCount += 1;
  }
}).on('close', () => {
  const result = new Set(numbers.map((number) => number % 42)).size;
  console.log(result);

  process.exit();
});
