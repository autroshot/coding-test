import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let x = 0;
rl.on('line', (line) => {
  x = Number(line);
}).on('close', () => {
  let max = 1;
  let numerator = 1;
  let denominator = 1;
  let reverse = true;
  for (let i = 1; i < x; i++) {
    if (i === x) break;
    if (numerator === max) {
      max += 1;
      numerator = 1;
      denominator = max;
      reverse = !reverse;
      continue;
    }
    numerator += 1;
    denominator -= 1;
  }
  console.log(
    reverse ? `${denominator}/${numerator}` : `${numerator}/${denominator}`
  );

  process.exit();
});
