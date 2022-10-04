import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const strings: string[] = [];
let lineCount = 0;
rl.on('line', (line) => {
  if (lineCount === 0) {
    lineCount += 1;
  } else {
    strings.push(line);
  }
}).on('close', () => {
  let result = 0;
  strings.forEach((string) => {
    if (isGroupWord(string)) result += 1;
  });
  console.log(result);

  process.exit();
});

function isGroupWord(string: string) {
  let previousChar = string[0];
  const existedAlphabets: string[] = [];
  existedAlphabets.push(string[0]);

  for (let i = 1; i < string.length; i++) {
    if (string[i] === previousChar) continue;
    if (!existedAlphabets.includes(string[i])) {
      previousChar = string[i];
      existedAlphabets.push(string[i]);
      continue;
    }
    return false;
  }
  return true;
}
