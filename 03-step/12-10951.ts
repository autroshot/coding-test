import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = '';
rl.on('line', (line) => {
  const inputs = line.split(' ').map((input) => Number(input));

  result += `${inputs[0] + inputs[1]}\n`;
}).on('close', () => {
  console.log(result);

  process.exit();
});
