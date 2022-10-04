import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let strs: string[] = [];
rl.on('line', (line) => {
  strs = line.split(' ');
}).on('close', () => {
  let result = strs.length;
  if (strs[0] === '') result -= 1;
  if (strs[strs.length - 1] === '') result -= 1;
  console.log(result);

  process.exit();
});
