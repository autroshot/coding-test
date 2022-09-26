import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
rl.on('line', (line) => {
  n = Number(line);
}).on('close', () => {
  console.log(getCycleLength(n));

  process.exit();
});

export function getCycleLength(n: number) {
  let result = 1;
  let newNumber = calculateN(n);

  while (true) {
    if (newNumber === n) break;

    newNumber = calculateN(newNumber);

    result += 1;
  }

  return result;
}

function calculateN(n: number) {
  return (n % 10) * 10 + ((Math.floor(n / 10) + (n % 10)) % 10);
}
