// The difference between reduce and reduceRight
const a = ['1', '2', '3', '4', '5'];
const left = a.reduce((prev, cur) => prev + cur);
const right = a.reduceRight((prev, cur) => prev + cur);

console.log(left); // "12345"
console.log(right); // "54321"
