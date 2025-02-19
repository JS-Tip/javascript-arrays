// I like to think of the forEach method
// as a for-loop, as we have the option to
// push values into a new array or mutate
// the original. Let's look at some examples
// below.

// Example 1: for-loop and forEach
const numbers = [1, 2, 3, 4, 5];
const numbersSquared = [];

// Square original numbers array by pushing
// new values into empty array
for (let i = 0; i < numbers.length; i++) {
  numbersSquared.push(numbers[i] ** 2)
}
console.log('numbers squared with for loop', numbersSquared);

// We can also mutate the original array
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] ** 2
}
console.log('numbers with for loop', numbers);


numbers.forEach((number) => {
  numbersSquared.push(number ** 2);
});

console.log('numbers squared', numbersSquared);

// Example 2: Using forEach to create an array of
// user objects
const users = []
const emails = ["ham@sandwich.com", "hummus@sandwich.com", "grilled_cheese@sandwich.com"]

// ✅ This use of forEach adds elements to an
// empty array, which is a common use of forEach
// in JavaScript applications
const result = emails.forEach((email, index) => {
  const id = index + 1
  users.push({id, email })
})
console.log("result is undefined:", result)
console.log("users", users)

// ❌ This example of forEach mutates the original
// array, which is generally something to avoid in
// frontend development
emails.forEach((email, index, arr) => {
  const id = index + 1
  arr[index] = {id, email }
})
console.log("emails", emails)
