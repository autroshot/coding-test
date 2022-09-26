import readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs: number[] = [];
let count = 0;
rl.on('line', (line) => {
  if (count >= 1) {
    inputs.push(Number(line));
    rl.close();
  } else {
    inputs.push(Number(line));
    count += 1;
  }
}).on('close', () => {
  console.log(getQuadrantNumber(inputs[0], inputs[1]));

  process.exit();
});

function getQuadrantNumber(x: number, y: number): 1 | 2 | 3 | 4 {
  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  if (x > 0 && y < 0) return 4;
  throw new Error('유효하지 않은 입력입니다.');
}
