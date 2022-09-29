function d(n: number) {
  const str = String(n);
  let sum = n;
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return sum;
}

const notSelfNumbers = new Set<number>();
for (let i = 1; i <= 10000; i++) {
  const result = d(i);
  notSelfNumbers.add(result);
}

for (let i = 1; i <= 10000; i++) {
  if (!notSelfNumbers.has(i)) console.log(i);
}
