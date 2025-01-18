// You have the following object:


// let person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// Change the city property to "Los Angeles".
// Add a new property country with the value "USA".
// Log the updated object.

// let person = {
//     name: 'jhon', 
//     age: 30, 
//     city: "new york"
// };
// person.city = "Los Angeles";
// person.country = "USA";
// console.log(person);


// Write a program to log all the keys and values of the object.
// let car = {
//     brand: "Tesla",
//     model: "Model S",
//     year: 2022
//   };
  
//   // Iterate through the object
//   for (let key in car) {
//     console.log(`${key}: ${car[key]}`);
//   }


// problem:
// let obj = { a: 1, b: 2, c: 3 };
// for (let key in obj) {
//   console.log(key, obj[key]); // Logs each key and its value
// }


// let obj1 = {a: 1, b: 2};
// let obj2 = { c: 3, b: 4};

// let merged = { ...obj1, ...obj2};
// console.log(merged);

// problem
// Count the number of properties in an object.

//  const countProperties = obj => Object.keys(obj).length;
//  const obj = {
//     a:1, b:2, c:3
//  };
//  console.log(countProperties(obj));
 

// problem
// Convert an object into an array of its key-value pairs.

// const obj = {a:1, b:2, c:4};
// const keyValueArray = Object.entries(obj);
// console.log(keyValueArray);

// problems
// write a function to check if an object is empty 

// const isEmpty = obj => Object.keys(obj).length ===0;
// console.log(isEmpty({}));
// console.log(isEmpty({a:1}));

// problem 
// convert an array of key-value paris into an object 
// const keyValueArray = [['a', 1], ['b', 2], ['c', 3]];
// const obj = Object.fromEntries(keyValueArray);
// console.log(obj);

// problems
// Reverse the keys adn values of an object 
//  const reverseObject = obj => 
//     Object.fromEntries(Object.entries(obj).map(([ key, value])=>[value, key]));
//  const obj = {a:1, b:2, c:3};
//  console.log(reverseObject(obj));
 