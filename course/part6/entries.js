const carMakeTotals = {
    "Ford": 3,
    "Subaru": 1,
    "Toyota": 6,
    "VW": 4,
    "Fiat": 5
}

Object.entries(carMakeTotals).forEach(([make, count]) => {
    console.log(`${make}: ${count}`)
})

const carMakeSimpleDescriptions = Object.entries(carMakeTotals).map(([make, count]) => {
    return `Count for ${make}: ${count}`
})
console.log("carMakeSimpleDescriptions:", carMakeSimpleDescriptions)

// Helper function for correct tenses
function hasOneCarMake(count, singular, plural) {
    return count === 1 ? singular : plural
}

const carMakeDescriptions = Object.entries(carMakeTotals).map(([make, count]) => {
    return `There ${hasOneCarMake(count, "is", "are")} ${count} ${make} car${hasOneCarMake(count, "", "s")} in the parking lot.`
})
console.log("carMakeDescriptions:", carMakeDescriptions)