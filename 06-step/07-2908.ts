import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a = 0;
let b = 0;
rl.on('line', (line) => {
  const strings = line.split(' ');
  a = Number(reverseString(strings[0]));
  b = Number(reverseString(strings[1]));
}).on('close', () => {
  if (a >= b) {
    console.log(a);
  } else {
    console.log(b);
  }

  process.exit();
});

function reverseString(string: string) {
  return string[2] + string[1] + string[0];
}
