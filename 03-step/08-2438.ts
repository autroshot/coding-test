import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
rl.on('line', (line) => {
  n = Number(line);

  rl.close();
}).on('close', () => {
  for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
  }

  process.exit();
});
