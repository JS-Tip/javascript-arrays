const users = [
  { id: 13, roles: ['admin', 'owner'], hasKeys: true },
  { id: 5, roles: ['admin', 'manager'], hasKeys: true },
  { id: 8, roles: ['staff'], hasKeys: true },
  { id: 9, roles: ['staff'], hasKeys: true },
  { id: 10, roles: ['staff'], hasKeys: true },
];

const everyUserHasKeys = users.every((user) => user.hasKeys);
console.log('everyUserHasKeys', everyUserHasKeys);
