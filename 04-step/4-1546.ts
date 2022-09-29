import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let scores: number[] = [];
let lineCount = 0;
rl.on('line', (line) => {
  if (lineCount === 0) {
    lineCount += 1;
  } else if (lineCount === 1) {
    scores = line.split(' ').map((input) => Number(input));
    lineCount += 1;
  }
}).on('close', () => {
  let max = 0;
  scores.forEach((score) => {
    if (score > max) max = score;
  });
  const sum = scores
    .map((score) => (score / max) * 100)
    .reduce((sum, score) => sum + score);
  console.log(sum / scores.length);

  process.exit();
});
