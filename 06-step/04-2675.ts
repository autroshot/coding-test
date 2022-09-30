import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs: Input[] = [];
let lineCount = 0;
rl.on('line', (line) => {
  if (lineCount === 0) {
    lineCount += 1;
  } else {
    const stringInputs = line.split(' ');
    inputs.push({
      repeatNumber: Number(stringInputs[0]),
      string: stringInputs[1],
    });
  }
}).on('close', () => {
  inputs.forEach((input) => {
    let result = '';
    input.string
      .split('')
      .forEach((char) => (result += char.repeat(input.repeatNumber)));

    console.log(result);
  });

  process.exit();
});

interface Input {
  repeatNumber: number;
  string: string;
}
