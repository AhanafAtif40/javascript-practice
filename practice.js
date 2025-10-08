// While loop
let i =1;
while(i<=10){
    console.log(i);
    i++;
}
console.log("While loop ended");

// Do while loop
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 10);
console.log("Do while loop ended");

// For loop
for (let k = 1; k <= 10; k++) {
    console.log(k);
}
console.log("For loop ended");
// For in loop
let obj = {
    name: "John",
    age: 30,
    city: "New York"
};
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}
console.log("For in loop ended");
// For of loop
let arr = [10, 20, 30, 40, 50];
for (let value of arr) {
    console.log(value);
}
console.log("For of loop ended");
// Nested loop
for (let m = 1; m <= 3; m++) {
    for (let n = 1; n <= 3; n++) {
        console.log("m: " + m + ", n: " + n);
    }
}
console.log("Nested loop ended");
// Break and continue
for (let p = 1; p <= 10; p++) {
    if (p === 5) {
        console.log("Breaking at p = " + p);
        break;
    }
    if (p % 2 === 0) {
        console.log("Skipping even p = " + p);
        continue;
    }
    console.log("Processing p = " + p);
}

// Even or odd Checker
 let number = 7;
if (number % 2 === 0) {
    console.log(number + " is even.");
} else {
    console.log(number + " is odd.");
}
// Factorial Calculator
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log("Factorial of " + num + " is " + factorial);

// Voting Eligibility Checker
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
// Multiplication Table
let tableNum = 3;
console.log("Multiplication table of " + tableNum + ":");
for (let i = 1; i <= 10; i++) {
    console.log(tableNum + " x " + i + " = " + (tableNum * i));
}


// What is an Object
let person = {
    name: "Ahanaf ",
    age: 25,
    city: "Bangladesh"
};
console.log(person);

// Accessing Object Properties
console.log("Name: " + person.name);
console.log("Age: " + person["age"]);
console.log("City: " + person.city);
// Modifying Object Properties
person.age = 26;
person["city"] = "Dhaka";
console.log("Updated Age: " + person.age);
console.log("Updated City: " + person.city);