import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let limit = 0;
let numbers: Number[];
rl.on('line', (line) => {
  if (limit === 0) {
    limit = Number(line.split(' ')[1]);
  } else {
    numbers = line.split(' ').map((input) => Number(input));
  }
}).on('close', () => {
  const result = numbers.filter((number) => number < limit).join(' ');
  console.log(result);

  process.exit();
});
