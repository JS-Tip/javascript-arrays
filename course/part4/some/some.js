const users = [
  { id: 13, roles: ['admin', 'owner'], hasKeys: true },
  { id: 5, roles: ['admin', 'manager'], hasKeys: true },
  { id: 8, roles: ['staff'], hasKeys: true },
  { id: 9, roles: ['staff'], hasKeys: true },
  { id: 10, roles: ['staff'], hasKeys: true },
  { id: 11, roles: ['customer'], hasKeys: false },
];

const someUsersHaveKeys = users.some((user) => user.hasKeys);
console.log('some users have keys 🔑 ➡️ ', someUsersHaveKeys);

// Practical Example: Some bills must be paid

// generateRandomPayments randomly creates an array of
// five values which can either be 'paid' or 'unpaid'.
// This is a helper function and is not covered in the course,
// but check it out if you're interested 🙂
function generateRandomPayments() {
  const payments = []
  for (let i = 0; i < 5; i++) {
    const rand = Math.floor(Math.random() * 10);
    
    if (rand < 2) {
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
// some, similar to includes, is often used in 
// application logic to check if a value is present.
// It is a more relaxed check, and another way
// of thinking of it is "at least one" 
// condition must be met.
if (payments.some(payment => payment === 'paid 💸')) {
  console.log("Success! Some bills are definitely paid! 🚀")
} else {
  console.log("You didn't pay even one bill?! 💩")
}