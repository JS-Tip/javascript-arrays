// Objective: given an array of users with roles,
// find the roles which are paired with the 'admin'
// role.

// A simplified list of users with a 
const users = [
  { id: 1, roles: ['customer'], hasKeys: false}, 
  { id: 2, roles: ['admin', 'developer'], hasKeys: true}, 
  { id: 3, roles: ['customer'], hasKeys: false}, 
  { id: 4, roles: ['customer'], hasKeys: false}, 
  { id: 5, roles: ['admin', 'manager'], hasKeys: true}, 
  { id: 6, roles: ['admin', 'manager'], hasKeys: true}, 
  { id: 7, roles: ['admin', 'manager'], hasKeys: true}, 
  { id: 8, roles: ['staff'], hasKeys: true}, 
  { id: 9, roles: ['staff'], hasKeys: true}, 
  { id: 10, roles: ['staff'], hasKeys: true}, 
  { id: 11, roles: ['supplier', 'producer'], hasKeys: false}, 
  { id: 12, roles: ['supplier'], hasKeys: false},
  { id: 13, roles: ['admin', 'owner'], hasKeys: true},
]

/**
 * 
 * usersWithKeys uses the filter and map methods to get
 * all users with keys, and then maps the user ids into
 * a new array.
 * 
 */
const usersWithKeys = users.filter(user => user.hasKeys).map(user => user.id)
console.log("user ids with keys", usersWithKeys)

/**
 * 
 * reducedUsersWithKeys uses the reduce method to filter
 * users based on whether they have a key and only returns
 * the user ids in an array. 
 *
 * The ids parameter is initialized with an empty array, 
 * which can be found as the second parameter in the 
 * reduce method. The user param represents each user
 * object in the users array.
 * 
 * Giving the parameters of the reduce method meaningful
 * names helps to clarify the start, middle, and end of
 * the data transformation. 
 * 
 * It's easier for me to think through the reduce method 
 * by thinking about how I want the output to look. For instance, 
 * my process might look like this:
 * 
 *  - Output: Array of user ids
 *  - Input: Array of users
 *  - Logic: If user has keys, then add the user id to
 *  the new ids array.
 * 
 */
const reducedUsersWithKeys = users.reduce((ids, user) => {
  if (user.hasKeys) {
    ids = [...ids, user.id]
  }
  return ids
}, [])
console.log("reduced user ids with keys", reducedUsersWithKeys)

export function filterMapUserIDsWithKeys(users) {
  return users.filter(user => user.hasKeys).map(user => user.id)
}

export function getUserIDsWithKeys(users) {
  return users.reduce((ids, user) => {
    if (user.hasKeys) {
      ids = [...ids, user.id]
    }
    return ids
  }, [])
}


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

const totalHours = employeeHourEntries.reduce((total, entries) => total + entries.hours, 0)
console.log(`You worked ${totalHours} hours in the month of February`)