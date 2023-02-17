function invoiceTotal(...args) {
  sum = 0

  for (let index = 0; index < args.length; index += 1) {
    sum += args[index];
  }

  return sum;
}

console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?
