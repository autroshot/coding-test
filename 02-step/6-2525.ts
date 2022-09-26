import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const currentTime: Time = { hour: 0, minute: 0 };
let cookTime = 0;
let inputCount = 0;
rl.on('line', (line) => {
  if (inputCount >= 1) {
    cookTime = Number(line);

    rl.close();
  } else {
    const inputs = line.split(' ');
    currentTime.hour = Number(inputs[0]);
    currentTime.minute = Number(inputs[1]);

    inputCount += 1;
  }
}).on('close', () => {
  let resultTime: Time = { ...currentTime };

  resultTime.minute += cookTime;
  resultTime = { ...normalizeTime(resultTime) };

  console.log(`${resultTime.hour} ${resultTime.minute}`);

  process.exit();
});

function normalizeTime(time: Time): Time {
  let result: Time = { ...time };

  if (result.minute >= 60) {
    result.hour += 1;
    result.minute -= 60;
    result = { ...normalizeTime(result) };
  }
  if (result.hour >= 24) {
    result.hour -= 24;
    result = { ...normalizeTime(result) };
  }

  return result;
}

interface Time {
  hour: number;
  minute: number;
}
