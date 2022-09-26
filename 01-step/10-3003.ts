import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const CHESS_PIECE_COUNTS = [1, 1, 2, 2, 2, 8];
let inputs: number[] = [];
rl.on('line', (line) => {
  inputs = line.split(' ').map((el) => parseInt(el));
  rl.close();
});

rl.on('close', () => {
  const result = CHESS_PIECE_COUNTS.map((chessPieceCount, index) => {
    return chessPieceCount - inputs[index];
  });
  console.log(result.join(' '));

  process.exit();
});
