import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let chars: string[] = [];
rl.on('line', (line) => {
  chars = line.split('');
}).on('close', () => {
  const result = chars.reduce((sum, char) => sum + getRequiredTime(char), 0);
  console.log(result);

  process.exit();
});

function getRequiredTime(char: string) {
  switch (char) {
    case 'A':
    case 'B':
    case 'C':
      return 3;
    case 'D':
    case 'E':
    case 'F':
      return 4;
    case 'G':
    case 'H':
    case 'I':
      return 5;
    case 'J':
    case 'K':
    case 'L':
      return 6;
    case 'M':
    case 'N':
    case 'O':
      return 7;
    case 'P':
    case 'Q':
    case 'R':
    case 'S':
      return 8;
    case 'T':
    case 'U':
    case 'V':
      return 9;
    case 'W':
    case 'X':
    case 'Y':
    case 'Z':
      return 10;
    default:
      return 0;
  }
}
