import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let totalCount = 0;
const ABArray: AB[] = [];
rl.on('line', (line) => {
  if (totalCount === 0) {
    totalCount = Number(line);
  } else {
    const inputs = line.split(' ');
    ABArray.push({ A: Number(inputs[0]), B: Number(inputs[1]) });

    if (ABArray.length >= totalCount) rl.close();
  }
}).on('close', () => {
  ABArray.forEach((AB) => console.log(AB.A + AB.B));

  process.exit();
});

interface AB {
  A: number;
  B: number;
}
