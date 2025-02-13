const numbers = [1, 2, [3, 4], 5, [6, [7, [8]]], 9]

export function flatten(arr) {
    let flattenedArr = []

    for(let i = 0; i < arr.length; i++) {
        // `Array.isArray` is very helpful if you
        // need to check for the type of value you
        // are working with, in order to determine
        // what you should do with the value.
        if(Array.isArray(arr[i])) { 
            flattenedArr = flattenedArr.concat(flatten(arr[i]))
        } else {
            flattenedArr.push(arr[i])
        }
    }

    return flattenedArr
}

// Taken from https://www.geeksforgeeks.org/implement-custom-array-flat-method-in-javascript/
export function flattenWithReduce(arr) {
    return arr.reduce((flattened, val) => 
        flattened.concat(Array.isArray(val) ? 
        flattenWithReduce(val) : val), []);
}

// Taken from https://www.geeksforgeeks.org/implement-custom-array-flat-method-in-javascript/
export function flattenWithSplice(arr) {
    let flattened = [...arr];
    let i = 0;
    while (i < flattened.length) {
        if (Array.isArray(flattened[i])) {
            flattened.splice(i, 1, ...flattened[i]);
        } else {
            i++;
        }
    }
    return flattened;
}

// console.log("flattened:", flatten(numbers))

// instanceOf vs. Array.isArray
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#instanceof_vs._array.isarray
// Test in the browser with following code
// const iframe = document.createElement("iframe");
// document.body.appendChild(iframe);
// const xArray = window.frames[window.frames.length - 1].Array;
// const arr = new xArray(1, 2, 3); // [1, 2, 3]

// // Correctly checking for Array
// Array.isArray(arr); // true
// // The prototype of arr is xArray.prototype, which is a
// // different object from Array.prototype
// arr instanceof Array; // false
