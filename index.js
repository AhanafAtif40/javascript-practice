// Problem 1: Filter and Sum Odd and Even Numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter odd and even
let oddNumbers = numbers.filter(num => num % 2 !== 0);
let evenNumbers = numbers.filter(num => num % 2 === 0);

// Sum them using reduce
let sumOdd = oddNumbers.reduce((sum, num) => sum + num, 0);
let sumEven = evenNumbers.reduce((sum, num) => sum + num, 0);

console.log("Odd Numbers:", oddNumbers);
console.log("Even Numbers:", evenNumbers);
console.log("Sum of Odd Numbers:", sumOdd);
console.log("Sum of Even Numbers:", sumEven);

// Problem 2: Combine Two Arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Combine using spread operator
let combined = [...arr1, ...arr2];

console.log("Combined Array:", combined);

// Problem 3: Flatten a Nested Array
let nested = [1, [2, [3, [4, 5]]]];

// Flatten deeply nested array
let flat = nested.flat(Infinity);

console.log("Flattened Array:", flat);

// Problem 4: Use Case of splice()
let fruits = ["Apple", "Banana", "Mango", "Orange"];

// Remove 1 element at index 1 and add new ones
fruits.splice(1, 1, "Grapes", "Pineapple");

console.log("After Splice:", fruits);

//  Problem 5: map(), filter(), reduce() Examples
let numbers2 = [1, 2, 3, 4, 5, 6];

// map() → double each number
let doubled = numbers2.map(num => num * 2);
console.log("map() →", doubled);

// filter() → keep numbers greater than 3
let filtered = numbers2.filter(num => num > 3);
console.log("filter() →", filtered);

// reduce() → sum of all numbers
let total = numbers2.reduce((acc, curr) => acc + curr, 0);
console.log("reduce() →", total);