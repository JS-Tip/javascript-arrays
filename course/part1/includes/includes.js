// Basic includes examples
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false


// includes the number 3 at index 3 (which does not exist)
[1, 2, 3].includes(3, 3); // false


// The fromIndex parameter can wrap around
// by taking negative numbers. In this case,
// we check if the value 3 is at index -1, or
// the last index of the array, which is true.
[1, 2, 3].includes(3, -1); // true


[1, 2, NaN].includes(NaN); // true


['1', '2', '3'].includes(3); // false

// Practical Example: Check for unpaid bills

// generateRandomPayments randomly creates an array of
// five values which can either be 'paid' or 'unpaid'.
// This is a helper function and is not covered in the course,
// but check it out if you're interested 🙂
function generateRandomPayments() {
  const payments = []
  for (let i = 0; i < 5; i++) {
    const rand = Math.floor(Math.random() * 10);
    
    if (rand < 7) {
      payments.push('paid')
    } else {
      payments.push('unpaid')
    }
  }
  return payments
}

const payments = generateRandomPayments()
for (let i = 0; i < payments.length; i++) {
  console.log(`${i + 1}. ${payments[i]}`)
}
// includes is often used in application logic to
// check if a value is present. If it is, we execute
// the code block, otherwise we move on.
if (payments.includes("unpaid")) {
  console.log("There is at least one unpaid bill!")
} else {
  console.log("All paid!")
}