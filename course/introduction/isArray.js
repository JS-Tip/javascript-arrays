const numbers = [1, 2, [3, 4], 5, [6, [7, [8]]], 9]

function flatten(arr) {
    let flattenedArr = []

    for(let i = 0; i < arr.length; i++) {
        // `Array.isArray` is critical when working with
        // nested arrays, as it allows for if-blocks like 
        // this one.
        if(Array.isArray(arr[i])) { 
            flattenedArr = flattenedArr.concat(flatten(arr[i]))
        } else {
            flattenedArr.push(arr[i])
        }
    }

    return flattenedArr
}

console.log("flattened", flatten(numbers))