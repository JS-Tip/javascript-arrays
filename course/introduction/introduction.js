const numbers = [1, 2, 3, 4, 5]
const phrases = new Array("The", "developer", "codes", "all", "day")
const moreNumbers = Array(6, 7, 8, 9, 10)
const emptySlots = Array(5)
const filledSlots = [...emptySlots].fill(0, 0, 5)

console.log("phrases", phrases)
console.log("numbers", numbers)
console.log("more number", moreNumbers)
console.log("empty slots", emptySlots)
console.log("filled slots", filledSlots)