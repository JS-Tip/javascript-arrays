const numbers = [1, 2, 3, 4, 5];
console.log(
  'numbers',
  numbers.map((number) => number ** 2),
);

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

const entriesWithMinutes = employeeHourEntries.map(entries => ({
  ...entries,
  minutes: entries.hours * 60
}))
console.log(entriesWithMinutes)