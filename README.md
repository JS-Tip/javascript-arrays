# JavaScript `Array` Class

This course is about the JavaScript `Array` class, its instance methods, static methods, and how each method is used individually and in combination with other array methods.

The examples from this course are practical and come from years of working with data structures in real-world projects - which are imperfect by nature. So instead of using arrays of numbers to show how methods like `reduce` or `includes` work, arrays of objects, sometimes nested, will be used to demonstrate common implementations of JavaScript's array methods.

## Who This Course is for

This course is **aimed at beginner to intermediate level JavaScript developers** who want to broaden and deepen their knowledge of JavaScript array methods.

The **beginner** will benefit from this course if they already have first experiences with for-loops and a feeling for how arrays work.

The **intermediate** developer will benefit from the practical examples of array methods and how to best combine them in real-world applications.

## Course Overview

### Introduction to the Array class

This introduction gives a quick interview of Array basics - how to create them and check their length.

### Part 1: The Foundational Methods

The methods in this part are some of the ideas I first encountered when learning about JavaScript arrays, and I see these methods on a daily basis in my work.

1. `push`
2. `includes`
3. `forEach`
4. `map`
5. `filter`
6. `find`

### Part 2: String Me Along

Doubtless, strings are important in any programming language, and they are often intertwined with the manipulation of arrays, so we'll put these methods in our toolbox before moving on to more array manipulation.

1. `toString`
2. `toLocaleString`

### Part 3: Your Utility Belt

As a JavaScript developer, you need to have a Batman-esque utility belt for daily tasks. These methods will help you to manipulate arrays with ease.

1. `pop`
2. `unshift`
3. `join`
4. `reverse`
5. `slice`
6. `sort`

### Part 4: Looping for Logic and Flattness

When looping over an array, developers often need to check for specific conditions. These methods help to check those conditions and methods like `reduce` manipulate the output accordingly. But even if all of the conditions are met, a developer might want to flatten an array to get rid of nesting, which is where `flat` and `flatMap` come into play.

1. `some`
2. `every`
3. `reduce`
4. `reduceRight`
5. `flat` - touches on the static method `Array.isArray()` too
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
2. `splice`
3. `concat`
4. `fill`
5. `copyWithin`

### Part 7: Arrays 4eva

Some methods need a bigger commitment and demand you mutate an array instead of making a copy. There is no room for cold feet in this part.

1. `toReversed`
2. `toSorted`
3. `toSpliced`

### Part 8: Iterate This

The Array class offers the methods in this part in order to _iterate_ over its values using the - you guessed it - `array iterator object`.

1. `entries`
2. `keys`
3. `values`

### Conclusion

### A Note on this Course

I intentionally used JavaScript instead of TypeScript in this course to lower the mental load for beginners. The examples in this course are applicable to both languages, but JavaScript offers a visual simplicity which felt appropriate for the level of this course.
