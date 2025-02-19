const users = [
  { id: 1, roles: ['customer'] },
  { id: 2, roles: ['admin', 'developer'] },
  { id: 3, roles: ['customer'] },
  { id: 4, roles: ['customer'] },
  { id: 5, roles: ['admin', 'manager'] },
  { id: 6, roles: ['admin', 'manager'] },
  { id: 7, roles: ['admin', 'manager'] },
  { id: 8, roles: ['staff'] },
  { id: 9, roles: ['staff'] },
  { id: 10, roles: ['staff'] },
  { id: 11, roles: ['supplier', 'producer'] },
  { id: 12, roles: ['supplier'] },
  { id: 13, roles: ['admin', 'owner'] },
];

const length = users.push({ id: 14, roles: ['customer'] });
console.log("length:", length)

const newLength = users.push({ id: 15, roles: ['customer'] }, { id: 16, roles: ['customer'] });
console.log("newLength:", newLength)

