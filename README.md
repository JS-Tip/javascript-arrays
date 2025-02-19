# JavaScript `Array` Class

This course is about the JavaScript `Array` class, its instance methods, static methods, and how each method is used individually and in combination with other array methods.

The examples from this course are practical and come from years of working with data structures in real-world projects - which are imperfect by nature. So instead of using arrays of numbers to show how methods like `reduce` or `includes` work, arrays of objects, sometimes nested, will be used to demonstrate common implementations of JavaScript's array methods.

## Who This Course is for

This course is **aimed at beginner to intermediate level JavaScript developers** who want to broaden and deepen their knowledge of JavaScript array methods.

The **beginner** will benefit from this course if they already have first experiences with for-loops and a feeling for how arrays work.

The **intermediate** developer will benefit from the practical examples of array methods and how to best combine them in real-world applications.

Each module of this course builds upon the previous one, so multiple methods can be chained together as you work through the course.

## How to use the code in this repo

Because this is a video course, there is already a visual component to the concepts covered. But there's no better way to learn than to tinker with code, and I have tried to make it as easy as possible to tinker with this repo.

There is a devcontainer for this repo, which means you can use Github Codespaces to play with the code, or clone the repo open the container locally as long as you have Docker installed on your machine.

In order to run a specific file, you can run the following command in your terminal:

```
node [path/to/file.js]
```

For example, in order to run the `reduce` file, you can run:
terminal:

```
node methods/reduce/reduce.js
```

Additionally, all tests can be run using the following command:
terminal:

```
pnpm test
```

Individual test files can be run by adding the filepath to the end of the previous command, for instance:
terminal:

```
pnpm test methods/reduce/reduce.test.js
```

Happy coding!

## Course Overview

### Introduction to the Array class

This introduction gives a quick interview of Array basics - how to create them and check their length.

### Part 1: The Foundational Methods

The methods in this part are some of the ideas I first encountered when learning about JavaScript arrays, and I see these methods on a daily basis in my work.

1. `push`
    - Parameter overview
    - Spread syntax
    - Return value
2. `forEach`
    - The `for-loop` and `forEach`
    - Combining `forEach` with `push`
    - Mutability and `forEach`
    - Practical example: Creating an array of user objects
3. `map`
    - Parameter overview
    - Comparison to `forEach` - immutability
    - Practical Example: Employee Time Tracker
4. `filter`
    - Basic example
    - Practical example: when to `filter` and when to `find`
5. `includes`
    - Basic example
    - `fromIndex` parameter
    - Practical Example: check for unpaid bills
6. `find`
    - Basic example
    - Practical example: `find` by date

### Part 2: String Me Along

Doubtless, strings are important in any programming language, and they are often intertwined with the manipulation of arrays, so we'll put these methods in our toolbox before moving on to more array manipulation.

1. `toString`
2. `toLocaleString`

### Part 3: Your Utility Belt

As a JavaScript developer, you need to have a Batman-esque utility belt for daily tasks. These methods will help you to manipulate arrays with ease.

1. `pop`
2. `shift`
2. `join`
3. `reverse` / `toReversed`
4. `slice`
5. `sort` / `toSorted`

### Part 4: Looping for Logic and Flattness

When looping over an array, developers often need to check for specific conditions. These methods help to check those conditions and methods like `reduce` manipulate the output accordingly. But even if all of the conditions are met, a developer might want to flatten an array to get rid of nesting, which is where `flat` and `flatMap` come into play.

1. `some`
2. `every`
3. `reduce`
    - `reduce` vs. `filter` and `map`
    - practical example
4. `reduceRight`
5. `flat`
    - custom `flatten` methods using `Array.isArray`
    - `instanceof` vs. `Array.isArray`
    - compare different approaches to flattening arrays
6. `flatMap`

### Part 5: Indexing or "Dude, Where's My Element?"

Working with array indexes is a core skill for any developer. Without indexes, developers are lost in a sea of bytes. These methods are your sail to swiftly find the information you need.

1. `indexOf`
2. `lastIndexOf`
3. `findIndex`
4. `findLastIndex`
5. `at`

### Part 6: Insert Here

Want to put some stuff in an array? Cool! These methods will `fill` you `with` joy.

1. `with`
2. `splice` / `toSpliced`
3. `unshift`
4. `concat`
5. `fill`
6. `copyWithin`

### Part 7: There and Back Again - An Object's Tale

It is oftentimes necessary to convert the entries of an object into an array, either by grabbing the key and value or one of the key or value.

1. `Object.values()`
2. `Object.keys()`
3. `Object.entries()`
4. `Object.fromEntries()`

### Part 8: Chaining Methods

This chapter is the culmination of all of the methods covered in this course. We will cover some common patterns which come about in the daily work of JavaScript developers. Additionally, we will look at testing custom functions and benchmarking different implementations of the same function.

### Conclusion

A quick summary of the course and everything which has been covered.

### A Note on this Course

I intentionally used JavaScript instead of TypeScript in this course to lower the mental load for beginners. The examples in this course are applicable to both languages, but JavaScript offers a visual simplicity which felt appropriate for the level of this course.
