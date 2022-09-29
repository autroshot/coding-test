import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
rl.on('line', (line) => {
  n = Number(line);
}).on('close', () => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (isHanSu(i)) count += 1;
  }
  console.log(count);

  process.exit();
});

function isHanSu(number: number): boolean {
  const string = String(number);

  if (string.length === 1 || string.length === 2) return true;
  if (string.length === 4) return false;

  const numbers = string.split('').map((value) => Number(value));
  if (numbers[1] - numbers[0] === numbers[2] - numbers[1]) {
    return true;
  } else {
    return false;
  }
}
