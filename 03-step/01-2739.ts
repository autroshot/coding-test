import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let multiplicationNo = 1;
rl.on('line', (line) => {
  multiplicationNo = Number(line);
  rl.close();
}).on('close', () => {
  for (let i = 1; i <= 9; i++) {
    console.log(`${multiplicationNo} * ${i} = ${multiplicationNo * i}`);
  }

  process.exit();
});
