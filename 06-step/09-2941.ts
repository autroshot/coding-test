import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let string = '';
rl.on('line', (line) => {
  string = line;
}).on('close', () => {
  console.log(calculateCroatiaAlphabetLength(string));

  process.exit();
});

function calculateCroatiaAlphabetLength(string: string): number {
  const LENGTH_2_CROATIA_ALPHABET = ['c=', 'c-', 'd-', 'lj', 'nj', 's=', 'z='];
  const LENGTH_3_CROATIA_ALPHABET = ['dz='];

  if (string.length === 0) return 0;
  if (LENGTH_2_CROATIA_ALPHABET.includes(string.slice(0, 2)))
    return 1 + calculateCroatiaAlphabetLength(string.slice(2));
  if (LENGTH_3_CROATIA_ALPHABET.includes(string.slice(0, 3)))
    return 1 + calculateCroatiaAlphabetLength(string.slice(3));
  return 1 + calculateCroatiaAlphabetLength(string.slice(1));
}
