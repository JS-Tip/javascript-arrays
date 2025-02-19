const users = [
  { id: 13, roles: ['admin', 'owner'], hasKeys: true },
  { id: 5, roles: ['admin', 'manager'], hasKeys: true },
  { id: 8, roles: ['staff'], hasKeys: true },
  { id: 9, roles: ['staff'], hasKeys: true },
  { id: 10, roles: ['staff'], hasKeys: true },
];

const everyUserHasKeys = users.every((user) => user.hasKeys);
console.log('every user has keys 🔑 ➡️ ', everyUserHasKeys);


// Practical Example: All bills must be paid

// generateRandomPayments randomly creates an array of
// five values which can either be 'paid' or 'unpaid'.
// This is a helper function and is not covered in the course,
// but check it out if you're interested 🙂
function generateRandomPayments() {
  const payments = []
  for (let i = 0; i < 5; i++) {
    const rand = Math.floor(Math.random() * 10);
    
    if (rand < 7) {
      payments.push('paid 💸')
    } else {
      payments.push('unpaid 👾')
    }
  }
  return payments
}

const payments = generateRandomPayments()
for (let i = 0; i < payments.length; i++) {
  console.log(`${i + 1}. ${payments[i]}`)
}
// every, similar to includes, is often used in 
// application logic to check if a value is present. 
// If it is, we execute the code block, 
// otherwise we move on. 
if (payments.every(payment => payment === 'paid 💸')) {
  console.log("Success! Everything is paid! 🚀")
} else {
  console.log("There is at least one unpaid bill! 🫠")
}

// Example: Is Increasing - source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every#using_the_third_argument_of_callbackfn
const numbers = [-2, 4, -8, 16, -32];
const isIncreasing = numbers
  .filter((num) => num > 0)
  .every((num, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    if (idx === 0) return true;
    return num > arr[idx - 1];
  });
console.log(isIncreasing); // true
