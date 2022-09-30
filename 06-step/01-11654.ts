import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';
rl.on('line', (line) => {
  input = line;
}).on('close', () => {
  console.log(input.charCodeAt(0));

  process.exit();
});
