const users = [
  { id: 1, roles: ['customer'], hasKeys: false },
  { id: 2, roles: ['developer'], hasKeys: true },
  { id: 3, roles: ['manager'], hasKeys: true },
];

console.log('length way', users[users.length - 1]);
console.log('user 3 with at way', users.at(-1));
console.log('user 2 with at way', users.at(-2));
console.log('user 1 with at way', users.at(-3));

const usersWithIndexes = {
  length: 2,
  0: { id: 1, roles: ['customer'], hasKeys: false },
  1: { id: 2, roles: ['developer'], hasKeys: true },
  2: { id: 3, roles: ['manager'], hasKeys: true }, // ignored because length is 2,
};
// Objects with a length property and
// keys which are numbers can be called
// with the at method
console.log('at with object', Array.prototype.at.call(usersWithIndexes, 0));
