import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let isFirstLine = true;
let isK = true;
interface TestCase {
  k: number;
  n: number;
}
const testCases: TestCase[] = [];
const inputTestCase: TestCase = { k: -1, n: -1 };
rl.on('line', (line) => {
  if (isFirstLine) {
    isFirstLine = false;
  } else if (isK) {
    inputTestCase.k = Number(line);
    isK = false;
  } else {
    inputTestCase.n = Number(line);
    testCases.push({ ...inputTestCase });
    isK = true;
  }
}).on('close', () => {
  testCases.forEach((testCase) => {
    console.log(calculateInhabitantCount(testCase.k, testCase.n));
  });

  process.exit();
});

export function calculateInhabitantCount(k: number, n: number): number {
  if (k === 0) return n;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += calculateInhabitantCount(k - 1, i);
  }
  return sum;
}
