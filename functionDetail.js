// 1.  first scenario with let
for(let i = 1; i <= 4; i++) {
console.log(i)
}
console.log(i); // ReferenceError: i is not defined


// 2.  second scenario of let 
let i;
for(i=1; i<=4; i++){
    console.log(i);  // 1 2 3 4
    
}

console.log(i); //5

// explaination of for loop with let:
// i = 1 থেকে শুরু

// condition check: i <= 4

// যদি true → loop body execute → console.log(i)

// তারপর i++



// var example = "var example:";
// first var example with for loop 
for (var i = 1; i<=4; i++){
    console.log(i);

}
console.log(i); // 5


// explanation : 
// i কে var দিয়ে declare করলে for loop এর বাইরে ও i accessible থাকে।

// Loop শেষ হওয়ার পর i এর শেষ মান রাখা থাকে।



// 2nd var example:
var i;
for(i =1; i<=4; i++){
    consolelog(i);  // 1 2 3 4
}
console.log(i); // 5





// for loop with let in asynchronous functions:

for (let j = 1; j <= 4; j++) {
    setTimeout(function() {
        console.log(j); 
    }, 100);
}



// কিন্তু setTimeout এ ভিন্ন behavior হয় কেন?
// কারণ: setTimeout asynchronous

// setTimeout এর callback পরে রান হয়।

// ঘটনা হয় এরকম:

// Step-by-step:
// 🟦 Step 1: loop execute হয় একদম fast

// JavaScript first loop টা execute করে:

// j = 1
// j = 2
// j = 3
// j = 4
// j = 5 → loop শেষ


// এই পুরো কাজ 1 millisecond এরও কম সময়ে হয়ে যায়।

// 🟦 Step 2: এখন setTimeout callback গুলো পরে রান হবে

// setTimeout এর callback গুলো event queue তে যায় এবং 100ms পরে রান হয়।

// এখন প্রশ্ন:

// তখন j এর মান কী থাকে?

// 👉 loop শেষ হওয়ার পরে j = 5.

// 🟥 এখন callback যখন এক্সিকিউট হয়:

// সবার ভিতরে লেখা:

// console.log(j);


// কিন্তু তারা সবাই একই var j কে রেফার করে।
// কারণ var block scoped না। Function scoped.
// একে বলে:

// Same reference captured

// তাই চারটা callback → একই j → যার মান 5

// ফলাফল:
// 5
// 5
// 5
// 5

// ⭐ তাহলে setTimeout না দিলে 1,2,3,4 আসতো কেন?

// কারণ তখন সাথে সাথে console.log(j) রান হয়।
// এখানে async দেরি নেই।
// তাই প্রতিবার j এর current value print হয়:


// 1
// 2
// 3
// 4
// কিন্তু setTimeout দিলে loop শেষ হবার পরে callback গুলো রান হয় → তখন j = 5.

// ⭐ কেন let হলে 1,2,3,4 আসত?
// কারণ let = block scoped
// প্রতিটি iteration এর আলাদা j থাকে।

// 🔥 Final summary (এক লাইন করে):
// var = একটাই j থাকে → সব callback একই j দেখে → 5,5,5,5

// let = প্রতিবার নতুন j তৈরি হয় → callback আলাদা মান দেখে → 1,2,3,4

// setTimeout = পরে রান হয় → তাই problem দেখা দেয়




// js interview questions:

// append and appendChild difference in javascript?
// innerText and textContent difference in javascript?
// What is event delegation in javascript?
// What is debouncing and throttling in javascript?    
// HTMLCollection and NodeList difference in javascript?
// What is the difference between call, apply and bind methods in javascript?
// What is prototype chain in javascript?
// What is hoisting in javascript?
// What is closure in javascript?
// What is the difference between == and === in javascript?
// what is the difference between var, let and const in javascript?
// What is the difference between synchronous and asynchronous programming in javascript?
// What is the event loop in javascript?
// what is promise in javascript?
// What is async/await in javascript?
// What are higher-order functions in javascript?
// What is currying in javascript?
// What is memoization in javascript?
// What is the difference between map, filter and reduce in javascript?
// what is the difference between forEach and map in javascript?
// What is the difference between null and undefined in javascript?
// What is NaN in javascript?
// what is the difference between function declaration and function expression in javascript?
// What is IIFE (Immediately Invoked Function Expression) in javascript?
// What is the difference between shallow copy and deep copy in javascript?
// what is event bubbling and event capturing in javascript?
// what is the difference between localStorage and sessionStorage in javascript?
// What is CORS (Cross-Origin Resource Sharing) in javascript?
// What is the difference between synchronous and asynchronous functions in javascript?
// what is the difference between splice and slice in javascript?
// What is the difference between call stack and event loop in javascript?
// What is the difference between object.freeze() and object.seal() in javascript?
// what is the difference between for..in and for..of loops in javascript?
// What is the difference between a class and a prototype in javascript?
// what is the difference between a promise and an observable in javascript?
// what is the difference between a module and a script in javascript?
// What is the difference between a web worker and a service worker in javascript?
// What is the difference between synchronous and asynchronous iteration in javascript?
// what is the difference between a generator function and an async function in javascript?
// What is the difference between a weak map and a map in javascript?
// what is the difference between a weak set and a set in javascript?
// what is the difference between a symbol and a string in javascript?
// What is the difference between a typed array and a regular array in javascript?
// what is the difference between a data view and a typed array in javascript?
// what is the difference between a proxy and a reflect in javascript?
// What is the difference between a promise and a callback in javascript?
// what is the difference between a synchronous and an asynchronous callback in javascript?
// what is the difference between a microtask and a macrotask in javascript?
// What is the difference between a stack and a queue in javascript?
// what is the difference between a linked list and an array in javascript? 
// what is dom in javascript?
// What is BOM in javascript?
// what is the difference between dom and bom in javascript?

