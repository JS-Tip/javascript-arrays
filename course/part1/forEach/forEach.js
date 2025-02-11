const numbers = [1, 2, 3, 4, 5];
const numbersSquared = [];

numbers.forEach((number) => {
  numbersSquared.push(number ** 2);
});

console.log('numbers squared', numbersSquared);
