// forEach and map

// const numbers= [ 1,2,3,4,6]; 
// const multiplied = numbers.map(num => num * 3);
// console.log(multiplied);

// const double = numbers.forEach(num => console.log(num *2));

// indexof and includes
// const fruit = ["banana", "mango", "orange"];
// const index = fruit.indexOf("banana");
// console.log(index);

// if it do not find the index then it will return -1;
// const index1 = fruit.indexOf("grape");
// console.log(index1);

// includes( ) give result in ture or false
//  const isPresent = fruit.includes("grape");
//  const isPresent1 = fruit.includes("mango");

//  Find 
// it will find the first matching based on condition .
// if condition do not match it will return undefined 
// const  numbers3 = [1,3,4,5,67,]
// const match = numbers3.find(num => num >3);
// console.log(match);
// const notMatch = numbers.find(num => num > 100);
// console.log(notMatch);

// filter . when we wnat all the element that matches the condition . returns a new array.
const numbers4 = [1,3,4,5,6,7]
const matchCondition = numbers4.filter(num => num >3);
console.log(matchCondition);
// find index  retuns the first element that matches the condition 
// if do not match it will return the -1
const matchCondition1 = numbers4.findIndex(num => num > 3);
console.log(matchCondition1)

// some : it cheks if any  element match the conditon
// returns in true or false 

const someElement = numbers4.some(num => num <2);
console.log(someElement);