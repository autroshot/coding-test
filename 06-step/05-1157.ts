import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let chars: string[] = [];
rl.on('line', (line) => {
  chars = line.toUpperCase().split('');
}).on('close', () => {
  const alphabetCounts: number[] = Array(26).fill(0);
  chars.forEach((char) => {
    if (!(char in alphabetCounts)) {
      alphabetCounts[char.charCodeAt(0) - 65] += 1;
    }
  });
  console.log(getMostFrequentAlphabet(alphabetCounts));

  process.exit();
});

function getMostFrequentAlphabet(alphabetCounts: number[]): string {
  let isDuplicated = false;
  let mostFrequentAlphabetCount = 0;
  let mostFrequentAlphabetIndex = -1;
  alphabetCounts.forEach((alphabetCount, index) => {
    if (alphabetCount > mostFrequentAlphabetCount) {
      mostFrequentAlphabetCount = alphabetCount;
      mostFrequentAlphabetIndex = index;
    }
  });
  alphabetCounts.forEach((alphabetCount, index) => {
    if (
      alphabetCount === mostFrequentAlphabetCount &&
      index !== mostFrequentAlphabetIndex
    ) {
      isDuplicated = true;
      return false;
    }
  });

  if (isDuplicated) {
    return '?';
  } else {
    return String.fromCharCode(mostFrequentAlphabetIndex + 65);
  }
}
