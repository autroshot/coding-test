import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tests: string[][] = [];
let lineCount = 0;
rl.on('line', (line) => {
  if (lineCount === 0) {
    lineCount += 1;
  } else {
    tests.push(line.split(''));
  }
}).on('close', () => {
  const scores = tests.map((quizzes) => {
    let currentScore = 0;

    return quizzes.map((quiz) => {
      if (quiz === 'O') {
        currentScore += 1;
        return currentScore;
      } else {
        currentScore = 0;
        return currentScore;
      }
    });
  });
  scores
    .map((quizScores) => {
      return quizScores.reduce((sum, quizScore) => sum + quizScore);
    })
    .forEach((score) => console.log(score));

  process.exit();
});
