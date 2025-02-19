const numbers = [1, 2, 3, 4, 5];
const five = numbers.find((number) => number === 5);
console.log('five', five);

// A list of days worked and the amount
// of hours worked on that day
const employeeHourEntries = [
    {date: "02.03.2025", hours: 8},
    {date: "02.04.2025", hours: 8},
    {date: "02.05.2025", hours: 8},
    {date: "02.06.2025", hours: 9},
    {date: "02.07.2025", hours: 8},
    {date: "02.10.2025", hours: 7},
    {date: "02.11.2025", hours: 8},
    {date: "02.12.2025", hours: 8},
    {date: "02.13.2025", hours: 10},
    {date: "02.14.2025", hours: 8},
    {date: "02.17.2025", hours: 8},
    {date: "02.18.2025", hours: 6},
    {date: "02.19.2025", hours: 8},
    {date: "02.20.2025", hours: 8},
    {date: "02.21.2025", hours: 7},
    {date: "02.24.2025", hours: 8},
    {date: "02.25.2025", hours: 8},
    {date: "02.26.2025", hours: 7},
    {date: "02.27.2025", hours: 8},
    {date: "02.28.2025", hours: 7},
]

// ✅ This function is very helpful as it searches
// for the date value, which is unique. We will either
// find an exact match or we won't.
function findEntryByDate(date) {
    return employeeHourEntries.find(entry => entry.date === date)
}

console.log("find 02.19.2025:", findEntryByDate("02.19.2025"))
console.log("find 03.01.2025:", findEntryByDate("03.01.2025"))

// ❌ findEntryByHours is less helpful as the values
// of the "hours" key is not unique. You will receive
// a result, but it might not be the result you're 
// looking for in the dataset. The filter method is
// better in this case!
function findEntryByHours(hours) {
    return employeeHourEntries.find(entry => entry.hours === hours)
}

// Example: Looking for the date 02.27.2025 by hours worked.
// { date: '02.03.2025', hours: 8 } is the first result found
// and is therefore returned by our function!
console.log("find 03.01.2025:", findEntryByHours(8))
