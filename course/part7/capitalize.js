// Objective: Capitalize the first and last name
// of Keanu Reaves using the Array methods split, map, 
// and join.

const fullName = "keanu reaves"

const fullNameCapitalizedWithSlice = fullName.split(" ").map(name => {
    // Note: the String class also has methods called at and slice,
    // which are not to be confused with the Array methods of the same
    // names.
    return `${name.at(0).toUpperCase()}${name.slice(1)}`
}).join(" ")

console.log("full name capitalized with slice:", fullNameCapitalizedWithSlice)

// The first parameter is a regex to identify the first letter of 
// a string and any non-whitespace characters. The second parameter 
// is a callback function which will be called for on each match.
const fullNameCapitalizedWithReplace = fullName.replace(/\w\S*/g, 
    function(name) { 
        return `${name.at(0).toUpperCase()}${name.slice(1)}`
    }
);

console.log("full name capitalized with replace:", fullNameCapitalizedWithReplace)
