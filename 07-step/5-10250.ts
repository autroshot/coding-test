import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let isFirstLine = true;
interface testData {
  h: number;
  w: number;
  n: number;
}
const testDatas: testData[] = [];
rl.on('line', (line) => {
  if (isFirstLine) {
    isFirstLine = false;
  } else {
    const inputs = line.split(' ').map((input) => Number(input));
    testDatas.push({ h: inputs[0], w: inputs[1], n: inputs[2] });
  }
}).on('close', () => {
  testDatas.forEach((testData) => console.log(calculateRoomNo(testData)));

  process.exit();
});

export function calculateRoomNo({ h, w, n }: testData): number {
  const frontNo = n % h ? n % h : h;
  const backNo = Math.ceil(n / h);
  const zeroLength = String(backNo).length === 2 ? 0 : 1;

  return Number(String(frontNo) + '0'.repeat(zeroLength) + String(backNo));
}
