import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let totalAmount = 0;
let totalProductCount = 0;
const receiptItems: ReceiptItem[] = [];
let lineCount = 0;
rl.on('line', (line) => {
  if (lineCount === 0) {
    totalAmount = Number(line);
    lineCount += 1;
  } else if (lineCount === 1) {
    totalProductCount = Number(line);
    lineCount += 1;
  } else {
    const inputs = line.split(' ');
    receiptItems.push({
      price: Number(inputs[0]),
      quantity: Number(inputs[1]),
    });

    if (receiptItems.length >= totalProductCount) rl.close();
  }
}).on('close', () => {
  const calculatedTotalAmount = receiptItems.reduce((sum, receiptItem) => {
    return sum + receiptItem.price * receiptItem.quantity;
  }, 0);
  console.log(calculatedTotalAmount === totalAmount ? 'Yes' : 'No');

  process.exit();
});

interface ReceiptItem {
  quantity: number;
  price: number;
}
