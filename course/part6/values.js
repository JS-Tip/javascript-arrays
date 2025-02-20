const carModelTotals = {
    "ford": 3,
    "subaru": 2,
    "toyota": 6,
    "vw": 4,
    "fiat": 5
}

// We want to get the total number of cars in the parking lot
const totalNumberOfCars = Object.values(carModelTotals)
    .reduce((total, carCount) => total += carCount, 0)

console.log("total number of cars", totalNumberOfCars)