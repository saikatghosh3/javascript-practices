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


const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

// output will be two because of promise.race it will return the first resolved promise.