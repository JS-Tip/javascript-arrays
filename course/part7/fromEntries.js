const carMakeMetadata = {
    "Ford": {count: 3, usedCount: 1},
    "Subaru": {count: 2, usedCount: 1},
    "Toyota": {count: 6, usedCount: 3},
    "VW": {count: 4, usedCount: 2},
    "Fiat": {count: 5, usedCount: 4},
    "Tesla": undefined
}

const carMakeMetadataList = Object.entries(carMakeMetadata)
console.log("carMakeMetadataList:", carMakeMetadataList, "\n"
)

const filteredCarMakeMetadata = carMakeMetadataList.filter(entry => entry[1] !== undefined)
console.log("filteredCarMakeMetadata:", filteredCarMakeMetadata, "\n")

const filteredCarMakeMetadataObject = Object.fromEntries(filteredCarMakeMetadata)
console.log("filteredCarMakeMetadataObject:", filteredCarMakeMetadataObject, "\n")