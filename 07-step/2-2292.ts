import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
rl.on('line', (line) => {
  n = Number(line);
}).on('close', () => {
  let result = 1;
  let ceilN = 1;
  while (true) {
    if (ceilN >= n) break;
    ceilN += 6 * result;
    result += 1;
  }
  console.log(result);

  process.exit();
});
