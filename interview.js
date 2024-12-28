// question1:


// function sayhi(){
//     console.log(name);
//     console.log(age);
//     var name = "Lydia";
//     var age = 21;
// }

// sayhi();

// result will be undefined undefined

// questoin2:

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }
  
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }

//   answer will be 
//   3,3,3 and 0 1 2  due to closure and let , var 
 
// question3:

// const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter() {
//       return 2 * Math.PI * this.radius;
//     },
//   };
  
//   console.log(shape.diameter()); // Output: 20
//   console.log(shape.perimeter()); // Output: 62.83185307179586

// question4: 

//   let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);

// the output will be hello

// question5: 

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

//  correct answer will be C: true false false

// question6:


// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person("Lydia", "Hallie");
// Person.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName());
  // It will throw a type error. 

  // question7: 

//   let greeting;
// greetign = {}; // Typo!
// console.log(greeting);

// answer will be Uncaught ReferenceError: member is not defined 

// question8:  

// function bark() {
//   console.log("Woof!");
// }

// bark.animal = "dog";
//  it is fine . because functions are like objects


// question9: 

// function sum(a, b) {
//   return a + b;
// }


// console.log(sum(1,"2"));
// output will be "12" because of stting concatenation

// question10: 

// let score = 10;
// console.log(score++); // Post-increment 10
// console.log(++score); // Pre-increment 12
// console.log(score);   // Final value 12 

// question11: 

// function checkAge(data) {
//   if (data === { age: 18 }) {
//     console.log("You are an adult!");
//   } else if (data == { age: 18 }) {
//     console.log("You are still an adult.");
//   } else {
//     console.log(`Hmm.. You don't have an age I guess`);
//   }
// }

// checkAge({ age: 18 });

// output will be Hmm.. You don't have an age  i guess. because of object comparison.

// question12: 

// function getAge(...args) {
//   console.log(typeof args);
// }

// getAge(21);

// output will be object because of rest operator it will be converted to object.

// question13:

// function getAge() {
//   "use strict";
//   age = 21;
//   console.log(age);
// }

// getAge();

// output will be age is not defined because of strict mode.

// question14:

// const obj = { 1: "a", 2: "b", 3: "c" };
// const set = new Set([1, 2, 3, 4, 5]);

// obj.hasOwnProperty("1");
// obj.hasOwnProperty(1);
// set.has("1");
// set.has(1);

// output will be true true false true because of type conversion in hasOwnproperty and has method of set. 

// question15:

// const obj = { a: "one", b: "two", a: "three" };
// console.log(obj);

// output will be {a: "three", b: "two"} because of duplicate key it will override the value.

// question16:

// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }
// output will be 1 2 4 because of continue statement it will skip the 3.
//  and break will stop the loop.

// question17:

// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"));
// const baz = () => console.log("Third");

// bar();
// foo();
// baz();
 // otuput will be first third second because of settimeout it will be executed after the call stack is empty.

 // question18:

//  <div onclick="console.log('first div')">
//   <div onclick="console.log('second div')">
//     <button onclick="console.log('button')">
//       Click!
//     </button>
//   </div>
// </div>

// output will be button second div first div because of event bubbling.

// question19:
{/* <div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div> */}
// otuput will be p div because of event bubbling. 

// question20:
// const person = { name: "Lydia" };

// function sayHi(age) {
//   console.log(`${this.name} is ${age}`);
// }

// sayHi.call(person, 21);
// sayHi.bind(person, 21);

// output will be Lydia is 21 and function will be returned because bind will return the function.

// question21:
// function sayHi() {
//   return (() => 0)();
// }

// console.log(typeof sayHi());
// output will be number because of IIFE function will be executed and it will return 0.
// type of 0 is number.
// type of null is Object
// type of undefined is undefined
// type of nan is Number
// type of [] is Object
// type of { } is Object
// type of function(){} is function
// type of ("") is String

// question22:
// console.log(typeof typeof 1);
// output will be string because typeof 1 is number and typeof number is string.


// question23:
// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);
// output will be [1, 2, 3, 7 x empty, 11] because of empty x 7 it will be printed.

//question24:


// const intervalId = setInterval(() => console.log("hi"), 1000);


// clearInterval(intervalId);

// output will be hi after every 1 second.
// clearInterval will stop the interval 

// question25:


// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, "one");
// });

// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, "two");
// });

// Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

// output will be two because of promise.race it will return the first resolved promise.

// question26:
// const person = {
//   name: "Lydia",
//   age: 21
// };

// for (const item in person) {
//   console.log(item);
// }

// output will be name age because of for in loop it will return the keys of the object.means porperties of the object.
// if we want to get the values we can use for of Loop

// question27:
console.log(3 + 4 + "5");
// output will be 75 because of left to right associativity. 3+4 will be 7 and 7+"5" will be "75"

// question28:
const num = parseInt("7*6", 10);
log(num);
// output will be 7 because parseInt will stop at the first non number character. 

// question29:

[1, 2, 3].map(num => {
  if (typeof num === "number") return;
  return num * 2;
});

// output will be [undefined, undefined, undefined] because of return statement it will return undefined.

// question30:
function getInfo(member, year) {
  member.name = "Lydia";
  year = 1998;
}

const person = { name: "Sarah" };
const birthYear = "1997";

getInfo(person, birthYear);

console.log(person, birthYear);

// output will be {name: "Lydia"} 1997 because of pass by reference and pass by value. object will be passed by reference and
// primitive data types will be passed by value.

//question31:
function greeting() {
  throw "Hello world!";
}

function sayHi() {
  try {
    const data = greeting();
    console.log("It worked!", data);
  } catch (e) {
    console.log("Oh no an error!", e);
  }
}

sayHi();

// output will be oh no an error hello world because of throw statement it will throw the error. and
//catch block will catch the error.

function Car() {
  this.make = "Lamborghini";
  return { make: "Maserati" };
}

const myCar = new Car();
console.log(myCar.make);

// output will be Maserati because of return statement it will return the object.
// if we use return statement in constructor it will return the object.

// question33:
(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);
 // output will be undefined number because of let x it will be block scoped and y will be global scoped.
 // y will be defined in global scope.

 //question34:
 let counter = 10;
export default counter;
// index.js
import myCounter from "./counter";

myCounter += 1;

console.log(myCounter);

// output will be error because of default exprort it will be read only.

// question35:
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);

// output wii be 1 because of destructuring it will assign the first value to y.
// if we want to get the rest of the values we can use rest operator.

const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
// output will be {admin: ture, name: "Lydia", age" 21} because of spread operator it will spread the property of user to admin.

// question37:
const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);

// output will be {"Level:19", "health": 90 } because of JSON.stringify it will only stringify the 
// properties which are mentioned in the array


// question38:
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
// output will be undefined and reference error because of hosting and temporal dead zone.

// question39:
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);

// output will be hello because of reference type it will be changed . 

// question 40:
Capturing > Target > Bubbling
// this is the correct order of event porpagation.

// There are three phases of even propagation:
// Capturing Phase: Root → Parent → Child (Target)
// Target Phase:    Target element
// Bubbling Phase:  Child (Target) → Parent → Root

// question41:

