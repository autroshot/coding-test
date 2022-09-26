import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let diceValues: number[] = [];
rl.on('line', (line) => {
  diceValues = line
    .split(' ')
    .map((input) => Number(input))
    .slice();
  rl.close();
}).on('close', () => {
  console.log(calculatePrizeMoney(diceValues));

  process.exit();
});

function calculatePrizeMoney(diceValues: number[]) {
  const diceValueCounts = new Array(6).fill(0);
  diceValues.forEach((value) => (diceValueCounts[value - 1] += 1));

  if (diceValueCounts.includes(3)) {
    return 10000 + (diceValueCounts.indexOf(3) + 1) * 1000;
  }
  if (diceValueCounts.includes(2)) {
    return 1000 + (diceValueCounts.indexOf(2) + 1) * 100;
  }
  return getMax(diceValues) * 100;
}

function getMax(numbers: number[]) {
  return numbers.sort((a, b) => b - a)[0];
}
