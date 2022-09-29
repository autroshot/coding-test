import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tests: number[][] = [];
let lineCount = 0;
rl.on('line', (line) => {
  if (lineCount === 0) {
    lineCount += 1;
  } else {
    const inputs = line.split(' ');
    inputs.shift();
    tests.push(inputs.map((input) => Number(input)));
  }
}).on('close', () => {
  const overAverageCountOfTests = tests.map((scores) => {
    const average = scores.reduce((sum, score) => sum + score) / scores.length;

    let overAverageCount = 0;
    scores.forEach((score) => {
      if (score > average) overAverageCount += 1;
    });
    return overAverageCount / scores.length;
  });
  overAverageCountOfTests.forEach((overAverageCount) =>
    console.log((overAverageCount * 100).toFixed(3) + '%')
  );

  process.exit();
});
