
 
     



    // setTimeout(() => {
    //     console.log("Step 3 (Async task finished)");  
    // }, 4000);  


// var a = 10;

// function me (){
//     console.log(a);
// }

// console.log(a);


// if (true) {
//     let blockVar = "Inside if block";
//     console.log(blockVar);
//    let blockVar = "hi";


// }

// console.log(blockVar);


// clouser function 
// function outerFunction() {
//     let outerVar = "I am from outer!";

//     function innerFunction() {
//         console.log(outerVar); // ✅ Can access outerVar even after outerFunction returns
//     }

//     return innerFunction;
// }
//  console.log(outerFunction());

// const myClosure = outerFunction(); // outerFunction runs and returns innerFunction
// myClosure(); // Logs: "I am from outer!"

// *************************** for  quiz**************************************

// coding practice : 

// var is considered as functional scope. it can be redeclared and hoisted.
// let is considered as block scope , can be reassigned but not redeclared.
// const is considered as block scope, can't be reassigned and redeclared. 
// both let and const are not hoisted 


// var x = 1;
// let y = 3;
// const z = 4;

// ****
// == is known as equality operator . It  only compares values 
// === is known as strict equality operator . It compares values and type 

// Example: 
// 10 =="10" // ture
// 10 === "10" // false


// another example:
// null == undefined // ture
// null === undefined // false
// ***

// hoisting is considered as moving declaration at the top of the scope.
// only declaration can be hoisted not the initialization.

// var a ;
// console.log(a)
// a = 7;

// **********
//  const numbers = [1,2,3,5,6];
//  let multiplied =  numbers.map(x=> x * 3);
//  console.log(multiplied);
//  console.log(numbers);
// map is a method of Array. map returns a new array with transformed  values for each elemment of array.

// const doubled = numbers.forEach( x => console.log(x * 2));
// for each executes a function once for each array elememnt but does't return anything.



// *****
// difference between null and undefined 
// null: null is considered as intentionally  absence of a value . it must be assigned by manually.
// undefined: undefined is considered as varible is declared but value is not assigned.
// let a;
// console.log(a);
// undifined

// let c = null;
// console.log(c);

// *******
// what will be the output of the following code 

// console.log(a);
// var a = 10;
// console.log(b);
// let b = 20;

// console.log(a); // undifined because var is hoisted but not initialize.
// console.log(b); // it will be Reference error (because  let variables  are hoisted but not accessible before initilization)


// // what will be the output of folowing code and why?
// console.log("start");
// setTimeout(()=>console.log("Timeout"),0)
// Promise.resolve().then(()=> console.log("promise"));
// console.log("End");

// answer will be : 
// start because it is synchronous

// end  because it is also synchronous
// Promise is considered as microtask. as well as async await
// timeout is considered as  macrotask . it executes after all microtask are finished as well as setinterval.

// // what will be the output?
// console.log([]+ {});
// [] considered as empty array. 
// {} it is also considered as empty object
// if we apply toString() method both on them , the result will be "[object Object]" 

// console.log(1 +'1' -1);
// answer will be 10. first it will convert number to stirng concatenation and output will be "11"
// then it will convert string to number and performs arithmetic operation . and the result will be 10
// another thing is Operator Precedence it moves left to right but + and - have same precedence 

// // *********
// convert the above code to async await
// function fetchData() {
//     return fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(res => res.json())
//     .then(data => console.log(data));
//     }
    

//     async function fetchData() {
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         const data =  await res.json()
//         console.log(data);
//     }

//     fetchData();

    // 1.What causes re-renders in React, and how can you
// optimize performance?

// re -renders happens when 
// -> a parent component re renders
// -> when states and props are changed 

// optimization issues:
 // use React.memo - prevent unnecessary re-renders of functional components.

 // useCallback  - Memorizes function to prevent unnecessary re-renders.
 // lazy loading -load components only when needed using React.lazy()
 // useMemo  - for expensive calculation for example: state that depend on another state or props

 //2.Why does the following ‘useEffect’ run infinitely,
// please write the fixed version of it?

// useEffect(() => {
// setCount(count + 1);
// }, [count]);

// answer: 
// so every time count updates, useEffect runs again, causing an infinite loop so it will run infinitely
// and ultimately will crash at some Point 

// useEffect (()=>{
//     setCount(()=> prev +1)
// }, [])

// what is closure in javascript . can you provide a simple example of closure
// -> a closure happens when a function remembers the variables from its outer function even after the outer
// fuction has finished executing. 
// in another word 
// a function keep assess to the variables of its parent function even after the parent has returned 

// function outerFunction() {
//     let outerVar = "I am from outer!";

//     function innerFunction() {
//         console.log(outerVar); 
//     }

//     return innerFunction;
// }

// const myClosure = outerFunction(); 
// myClosure(); 


// another example: 
// function outer() {
//     let count = 0; // Variable in outer scope
//     return function inner() {
//     count++; // Inner function remembers 'count'
//     console.log(count);
//     };
//     }
//     const counter = outer(); // outer() runs, but 'count' stays in memory
    // counter(); // Output: 1
    // counter(); // Output: 2
    // Here, inner() remembers count from outer(), even though outer() has already executed. This is
    // closure.
    

    // what is event bubbling and capturing

    // bubbling: Event bubbling, the event starts at the target elment and moves upword to its ancestors 
    // The event is handled first by the innermost element, then moves up to the DOM Tree 

    // Example: child.addEventListener('click', ()=> console.log('child'));

    // Event capturing: 
    // In event capturing , the event travels from the top(root ) to target Element.
    // we  must tell JavaScript to use capturing by setting {capture:true} in addEventListener

    // parent.addEventListener(()=> console.log('parent'), ture);

    // *******

    // spread operator : The spread operator (...) is a powerful feature
    //  that allows you to expand elements of an array , object, or iterable into 
    // individual elements .
    // example: 
    // const arr1 = [1,3,4];
    // const arr2 = [...arr1, 76,8];
    // const obj1 = {name1:"saikat"};
    // const obj2 = {...obj1, name2:"ghosh"}


    // remove duplicate 
    // function removeDuplicate (arr){
    //     return [...new Set(arr)];
    // }
    // console.log([11,3,3,5,5,6,7])

    // what is the purpose of break and continue statement
    // -inside switch case break is used to exit form the switch case check if condition match 
    // -inside loop(while /for) break is used to exit out form the loop.
    // - inside loop 'continue ' is used to skip the current iteration and continue with the next iteration.


    // correct react code : 

    // The above code will immediately executes during render 
    // passes undefined as event handler 

    // import React from "react"
    // function MyComponent (){
    //     return(
    //         <button onClick={()=> console.log("buton clicked!")}>
    //             Click me
    //         </button>
    //     );
    // }

    // export default MyComponent;


// console.log("1");
// setTimeout(()=> console.log("2"),0);
// console.log("3");

// answer will be :
// 1,3,2

// *******
// .Write a js function that will take a ‘name’ parameter
// and return a sentence like ‘Welcome (value of name
// variable)’ ?(You have to use template literal

// function greet (name){
//     return `Welcome ${name}`
// }
// console.log(greet("saikat"));
