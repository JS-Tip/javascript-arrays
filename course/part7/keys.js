const carModelTotals = {
    "ford": 3,
    "subaru": 2,
    "toyota": 6,
    "vw": 4,
    "fiat": 5
}

// We want a list of all of the car models in the parking lot
const carModels = Object.keys(carModelTotals)
console.log("car models:", carModels)

// Filter for car models beginning with F
const carModelsBeginningWithF = Object.keys(carModelTotals).filter(model => model.startsWith("f"))
console.log("car models beginning with \"f\":", carModelsBeginningWithF)