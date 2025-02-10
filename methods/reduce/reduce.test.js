import { getUserIDsWithKeys, filterMapUserIDsWithKeys } from './reduce.js'
import { describe, it } from "node:test";
import assert from "node:assert";
import { Bench } from 'tinybench'

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

describe("getUserIDsWithKeys function", () => {
  it('returns array of user ids from users with keys', () => {
    assert.deepEqual(getUserIDsWithKeys(users), [2, 5, 6, 7, 8, 9, 10, 13]);
  });
});

describe("filterMapUserIDsWithKeys function", () => {
  it('returns array of user ids from users with keys', () => {
    assert.deepEqual(filterMapUserIDsWithKeys(users), [2, 5, 6, 7, 8, 9, 10, 13]);
  });
});

const bench = new Bench({ name: 'reduce benchmark', time: 100 })

bench
  .add('reduced users', () => {
    getUserIDsWithKeys(users)
  })
  .add('filtered and mapped users', async () => {
    filterMapUserIDsWithKeys(users)
  })

await bench.run()

console.log(bench.name)
console.table(bench.table())