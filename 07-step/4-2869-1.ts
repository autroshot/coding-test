import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a = 0;
let b = 0;
let v = 0;
rl.on('line', (line) => {
  const inputs = line.split(' ').map((input) => Number(input));
  a = inputs[0];
  b = inputs[1];
  v = inputs[2];
}).on('close', () => {
  const result = Math.ceil((v - b) / (a - b));
  console.log(result);

  process.exit();
});
