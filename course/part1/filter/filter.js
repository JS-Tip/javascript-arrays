const numbers = [1, 2, 3, 4, 5];
console.log(
  'numbers',
  numbers.filter((number) => number < 3),
);

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

function workedOvertime(day) {
  return day.hours > 8
}

// ✅ This function is helpful as it filters
// based on a condition which could yield
// multiple results.
const workdaysWithOvertime = employeeHourEntries.filter(workedOvertime)
console.log("workdaysWithOvertime", workdaysWithOvertime)

function dateWorked(day) {
  return day.date === "02.20.2025"
}

// ❌ workdaysByDate is less helpful as only
// one value will ever be found, because the date
// key has unique values. The find method would be
// more appropriate in this case, as we would not have
// to access an array to retrieve its single object.
const workdaysByDate = employeeHourEntries.filter(dateWorked)
console.log("workdaysByDate", workdaysByDate)
