import { vehicleResults } from './api.js';
import { flatten } from '../flat/isArray.js'

/**
 * `flatMap` is less performant than using map `combined` with `flat`, 
 * however it offers more readability and the option to access the 
 * current array in its third parameter.
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap#for_adding_and_removing_items_during_a_map
const stations = ["New Haven", "West Haven", "Milford (closed)", "Stratford"];
const line = stations
  .filter((name) => !name.endsWith("(closed)"))
  .flatMap((name, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    if (idx === arr.length - 1) return []; // last station has no next station
    return [`${name} - ${arr[idx + 1]}`];
  });
// console.log(line); // ['New Haven - West Haven', 'West Haven - Stratford']


export function getVehicleDetailsWithFlatMap(vehicleList) {
  return vehicleList?.vehicles?.flatMap(
    vehicle =>
      vehicle?.manufacturers?.flatMap(
        manufacturer =>
          manufacturer?.modelGroups?.flatMap(
            modelGroup =>
              modelGroup?.models?.flatMap((model) => {
                // Remove element by returning an empty array
                if (!model?.modelTypes) {
                  return [];
                }
  
                return model?.modelTypes?.map(modelType => ({
                  ...modelType,
                  manufacturerName: manufacturer.manufacturerName,
                  modelName: modelGroup.modelGroupName,
                  typename: modelType.typename,
                  productionBegin: modelType.productionBegin,
                  productionEnd: modelType.productionEnd,
                  fuelType: modelType.fuelType,
                  secondFuelType: modelType.secondFuelType,
                  kiloWatt: modelType.kiloWatt,
                  price: modelType.price,
                }));
              })
          )
      )
  );
}

export function getVehicleDetailsWithMapAndFlat(vehicleList) {
  return vehicleList?.vehicles?.map(
    vehicle =>
      vehicle?.manufacturers?.map(
        manufacturer =>
          manufacturer?.modelGroups?.map(
            modelGroup =>
              modelGroup?.models?.map((model) => {
                // Remove element by returning an empty array
                if (!model?.modelTypes) {
                  return [];
                }
  
                return model?.modelTypes?.map(modelType => ({
                  ...modelType,
                  manufacturerName: manufacturer.manufacturerName,
                  modelName: modelGroup.modelGroupName,
                  typename: modelType.typename,
                  productionBegin: modelType.productionBegin,
                  productionEnd: modelType.productionEnd,
                  fuelType: modelType.fuelType,
                  secondFuelType: modelType.secondFuelType,
                  kiloWatt: modelType.kiloWatt,
                  price: modelType.price,
                })).flat();
              }).flat()
          ).flat()
      ).flat()
  ).flat();
}

export function getVehicleDetailsWithMapAndFlatten(vehicleList) {
  const vehicleProperties = vehicleList?.vehicles?.map(
    vehicle =>
      vehicle?.manufacturers?.map(
        manufacturer =>
          manufacturer?.modelGroups?.map(
            modelGroup =>
              modelGroup?.models?.map((model) => {
                // Remove element by returning an empty array
                if (!model?.modelTypes) {
                  return [];
                }
  
                return model?.modelTypes?.map(modelType => ({
                  ...modelType,
                  manufacturerName: manufacturer.manufacturerName,
                  modelName: modelGroup.modelGroupName,
                  typename: modelType.typename,
                  productionBegin: modelType.productionBegin,
                  productionEnd: modelType.productionEnd,
                  fuelType: modelType.fuelType,
                  secondFuelType: modelType.secondFuelType,
                  kiloWatt: modelType.kiloWatt,
                  price: modelType.price,
                }))
              })
          )
      )
  )

  return flatten(vehicleProperties)
}

console.time("with flat map")
getVehicleDetailsWithFlatMap(vehicleResults)
console.timeEnd("with flat map")

console.time("without flat map")
getVehicleDetailsWithMapAndFlat(vehicleResults)
console.timeEnd("without flat map")

console.time("with recursive flatten")
getVehicleDetailsWithMapAndFlatten(vehicleResults)
console.timeEnd("with recursive flatten")