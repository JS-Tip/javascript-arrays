import { Bench } from 'tinybench';
import { getVehicleDetailsWithMapAndFlat, getVehicleDetailsWithFlatMap } from './flatMap.js';
import { vehicleResults } from './api.js';

const bench = new Bench({ name: 'flatMap benchmark', time: 100 });

bench
  .add('with flatMap', () => {
    getVehicleDetailsWithFlatMap(vehicleResults);
  })
  .add('with map + flat', async () => {
    getVehicleDetailsWithMapAndFlat(vehicleResults);
  });

await bench.run();

console.log(bench.name);
console.table(bench.table());