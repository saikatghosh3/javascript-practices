// function sayhi(){
//     console.log(name);
//     console.log(age);
//     var name = "Lydia";
//     var age = 21;
// }

// sayhi();

// result will be undefined undefined

// **

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }
  
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }

//   answer will be 
//   3,3,3 and 0 1 2  due to closure and let , var 
 
// ***
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


//   let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);

// the output will be hello
// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

//  correct answer will be C: true false false
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

//   let greeting;
// greetign = {}; // Typo!
// console.log(greeting);

// answer will be Uncaught ReferenceError: member is not defined 

// function bark() {
//   console.log("Woof!");
// }

// bark.animal = "dog";
//  it is fine . because functions are like objects

// function sum(a, b) {
//   return a + b;
// }


// console.log(sum(1,"2"));
// output will be "12" because of stting concatenation


// let score = 10;
// console.log(score++); // Post-increment 10
// console.log(++score); // Pre-increment 12
// console.log(score);   // Final value 12 



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


function getAge(...args) {
  console.log(typeof args);
}

getAge(21);

// output will be object because of rest operator it will be converted to object.