const person = { name: "Saikat", age: 25 };

// The reference (person) cannot be reassigned
// person = { name: "John", age: 30 }; // ❌ Error: Assignment to constant variable

// But the object itself is mutable
// person.age = 26; // ✅ Allowed

// person.name = "shuvo" // Output: { name: "Saikat", age: 26 }

// console.log(person);


// map 
const number = [1,2,3,];
const doubled = number.map(num=> num*2);
console.log(doubled);
console.log(number);
number.forEach(x => console.log(x)); 
number.forEach(function(num){
    console.log()
})

// let a ;
// console.log(a);
 
// let a = null;
// console.log(a);

// const Person = {
//     name: null,
//     age : 30
// }
// console.log(Person);


// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// parent.addEventListener("click", ()=> console.log("parent"), true);
// child.addEventListener( "click", ()=>console.log("child") );


// obj1 = {name: "shuvro"}
// obj2 ={...obj1, name2: "biswas"}

// function greet (name){
//     return `Welcome ${name}`
// }
// console.log(greet("saikat"));


// spelling:
// redeclared, assigned , behaviour, type corecion , iteration, concatenation, closure, 


// practice: 
// async function fetchData( ) {
//     const res = await fetch("");
//     const data = await res.json()
//     console.log(data)
// }
// fetchData()

// useEffect (()=>{
//     setCount (()=> prev +1)
// },[])

// remove duplicate

// function removeDuplicate(arr){
//     return [...new Set(arr)];
// }

// console.log(removeDuplicate([1,2,2,3,5,5,7,8]));

// function greet (name){
//     return `Welcome ${name}`
// }
// console.log("saikat");

// a closure in javascript is when a function remembers the function form outer scope  even after the outer function has finished executing.

//  function outerFunction() {
//     let outerVar = "I am from outer"

//     function innerFunction(){
//         console.log(outerVar);
//     }
//     return innerFunction;

//  }

//  const myClosure = outerFunction()
//  myClosure()


// practice: 

// var : var is considered as functional scope, it can be redeclared and reassigned and hoisted.
// let : let is considered as block scope. it can be reassigned but not redecalred.
// const: const is also konwn as block scope. it can't be reassigned and redeclared.
// both let and const have temporal dade zone and is not hoisted.

// ********
// == is known as equality operator . checks only value 
// === is known as stict equality operator. chekes both value and type 
//  7 = "7" true
//  7 ==="7" false
//  null == undefined true
//  null === undefined false

// hosting is a behavior of JavaScript moving declarations to the top of their  scope during declaration phase. 
// only declaration is hoisted not initailizations
 
// var a; 
// console.log(a)
// a = 5;

// *********
// map: map returns a new array with the transformed value of each element of the array.
// forEach: for each does not retun anything . it executes a function once for each element of the array.
// const numbers = [1,3,4,5,6];
// const multiplied = numbers. map(num => num *3)
// console.log(multiplied);

// const doubled = numbers.forEach(num => console.log(num *2)) // just iterates

// 07: console.log("Start")
// and console.log("End")
// both are synchronous and execute immidiately
// Promise will go to  micro task  queue. as well as async await.
// setTimeout: will go to  macrotask queue. as well as setInterval 




// - on the Global scope: this refers to the window Object
// - inside an object method . this refers to the object that invoke the method
// - inside arrow function: this refers to the outer scope this value 
// - inside a calss constructor this points to newly created objects


//**** */

// [object Object]
// and 10
// ********
//  asyn function fetchData (){
//  const res = await fetch("")
//  const data = await res.json();
//  console.log(data)
// }
// fetchData();

// Every time count updates , useEffect runs again , causing an infinite loop . so,
// it will run infinitely  and ulitmatly crush at some point.


useEffect (()=>{
    setCount (()=> prev +1)
},[]);

// .. closure :
// when a function remembers the outer scope variable ,even after the outer function has finished executing or returned. 

// function outerFunction (){
//   outerVar = "i am from outer";
//   function innerFunction (){
//     console.log(outerVar);
//   }
//   return innerFunction;

// }
// myClosure = outerFunction();
// console.log(myClosure)

// Evnet bubbling: 
// it is an event that occurs at the targeted event and move upword to the window (its incestors)
// it is a default behaviour.
// capturing:
// it is an event that occurs at the parent/ root  to the children element / targeted element.

// let child = document.getElementById("child");
// let parent = document.getElementById("child");

// child.addEventListener('click', ()=> console.log("parent"),) 
// parent. addEventListener(click, ()=> console.log(parent),true)// event capturing



// function removeDuplicate (arr){
//     return [...new Set(arr)]
// }
// console.log(removeDuplicate([1,3,44,4,4,5,6,6]))