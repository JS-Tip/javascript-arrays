// Objective: given an array of users with roles,
// find the roles which are paired with the 'admin'
// role.

// A simplified list of users with a
const usersWithRoles = [
  { id: 1, roles: ['customer'], hasKeys: false },
  { id: 2, roles: ['admin', 'developer'], hasKeys: true },
  { id: 3, roles: ['customer'], hasKeys: false },
  { id: 4, roles: ['customer'], hasKeys: false },
  { id: 5, roles: ['admin', 'manager'], hasKeys: true },
  { id: 6, roles: ['admin', 'manager'], hasKeys: true },
  { id: 7, roles: ['admin', 'manager'], hasKeys: true },
  { id: 8, roles: ['staff'], hasKeys: true },
  { id: 9, roles: ['staff'], hasKeys: true },
  { id: 10, roles: ['staff'], hasKeys: true },
  { id: 11, roles: ['supplier', 'producer'], hasKeys: false },
  { id: 12, roles: ['supplier'], hasKeys: false },
  { id: 13, roles: ['admin', 'owner'], hasKeys: true },
];

// Helper function to check if a user has the admin role
function isAdmin(user) {
  return user.roles.includes('admin');
}

export function getAdminRoles(users) {
  return users
    .reduce((roles, user) => {
      if (isAdmin(user)) {
        roles = [...roles, ...user.roles];
      }
      return roles;
    }, [])
    .flat();
}

// Create a unique list of admin roles using
// reduce and includes
export function getAdminRolesWithouSet(roles) {
  const uniqueRoles = roles.reduce((roles, role) => {
    if (roles.includes(role)) {
      return roles;
    }
    return [...roles, role];
  }, []);

  return uniqueRoles;
}

console.log(
  'without set:',
  getAdminRolesWithouSet(getAdminRoles(usersWithRoles)),
);

// Create a unique list of roles which are paired
// with the role 'admin'
export function getUniqueAdminRolesWithSet(roles) {
  return Array.from(new Set(roles));
}
console.log(
  'unique roles:',
  getUniqueAdminRolesWithSet(getAdminRoles(usersWithRoles)),
);
