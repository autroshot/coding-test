import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = '';
let caseNumber = 1;
rl.on('line', (line) => {
  const inputs = line.split(' ');

  if (inputs.length === 2) {
    const A = Number(inputs[0]);
    const B = Number(inputs[1]);

    result += `Case #${caseNumber}: ${A + B}\n`;
    caseNumber += 1;
  }
}).on('close', () => {
  console.log(result);
  process.exit();
});
