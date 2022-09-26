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
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  console.log(result);

  process.exit();
});
