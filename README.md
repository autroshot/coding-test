백준에서는 `require`를 사용하는 CommonJS만 지원한다.

```ts
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs: string[] = [];
rl.on('line', (line) => {
  inputs = line.split(' ');

  rl.close();
}).on('close', () => {
  console.log(inputs.join(' '));

  process.exit();
});
```
