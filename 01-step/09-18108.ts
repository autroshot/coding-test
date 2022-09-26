import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: string;

rl.on('line', (line) => {
  input = line;
  rl.close();
});

rl.on('close', () => {
  console.log(Number(input) - 543);

  process.exit();
});
