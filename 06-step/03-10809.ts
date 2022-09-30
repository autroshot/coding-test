import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let chars: string[] = [];
rl.on('line', (line) => {
  chars = line.split('');
}).on('close', () => {
  const alphabets: number[] = Array(26).fill(-1);
  chars.forEach((char, index) => {
    if (alphabets[char.charCodeAt(0) - 97] === -1) {
      alphabets[char.charCodeAt(0) - 97] = index;
    }
  });
  console.log(alphabets.join(' '));

  process.exit();
});
