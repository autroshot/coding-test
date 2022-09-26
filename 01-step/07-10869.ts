import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: number[] = [];

rl.on('line', (line) => {
  input = line.split(' ').map((el) => parseInt(el));
  rl.close();
});

rl.on('close', () => {
  console.log(input[0] + input[1]);
  console.log(input[0] - input[1]);
  console.log(input[0] * input[1]);
  console.log(Math.floor(input[0] / input[1]));
  console.log(input[0] % input[1]);
  process.exit();
});
