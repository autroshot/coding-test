import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputTime: Time = { hour: 0, minute: 0 };
rl.on('line', (line) => {
  const inputs = line.split(' ');
  inputTime.hour = Number(inputs[0]);
  inputTime.minute = Number(inputs[1]);

  rl.close();
}).on('close', () => {
  const resultTime = calculate45MinutesEarlier(inputTime);
  console.log(`${resultTime.hour} ${resultTime.minute}`);

  process.exit();
});

function calculate45MinutesEarlier(time: Time): Time {
  const result: Time = { ...time };

  result.minute -= 45;

  if (result.minute < 0) {
    result.hour -= 1;
    result.minute += 60;
  }
  if (result.hour < 0) {
    result.hour += 24;
  }

  return result;
}

interface Time {
  hour: number;
  minute: number;
}
