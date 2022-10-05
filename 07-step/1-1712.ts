import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a = 0;
let b = 0;
let c = 0;
rl.on('line', (line) => {
  const inputs = line.split(' ').map((input) => Number(input));
  a = inputs[0];
  b = inputs[1];
  c = inputs[2];
}).on('close', () => {
  if (b > c) {
    console.log(-1);
  } else {
    let saleCount = 1;
    while (true) {
      if (c * saleCount > a + b * saleCount) break;
      saleCount += 1;
    }
    console.log(saleCount);
  }

  process.exit();
});
