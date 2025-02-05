// problems 
// what will be the output of the following code 
console.log(1 + "2" + 3);
console.log(1 + 2 + "3");
console.log("1" + 2 + 3);


// problems 
// How to check if an object is empty in JavaScript?
function isEmpty (obj){
    return Object.keys(obj).length === 0;
} 
console.log(isEmpty({}));
console.log(isEmpty({ a: 1 }));

// == is known as abstract equality cheque only value
// === is known as strict equality.cheque value and type

// For example 
console.log(5 == "5");
console.log( 5 === "5");

// what will be the output or following codes 
function test() {
    return {
      message: "Hello"
    };
  }
  console.log(test().message);
  
  // what is difference between null and undefiend?

  // null:Explicit absecnt of value type is object. example: let e = null.
  // undefined: variable decleared but value is not assigned. type is object. let x ; console.log(x);

  // Explain how map , filter  work 
  // map: transform each element in array 
  let numbers = [1,2,3,4];
  let double = numbers.map(n=> n * 2);
  console.log(double);

  // returns a new array with elemensts that satisfy a condition
  const nums = [1,2,3,4,5,6];
  const even = nums.filter(n => n% 2 === 0);
  console.log(even);


  // what will be a output of setinterval inside loop 

  for (var i = 0; i < 3; i++ ){
    setTimeout(() => {
      console.log(i)
    }, 3000 );
  }

  // Since var is function-scoped, i is shared across all iterations. After the loop, i = 3,
  //  so all setTimeout callbacks print 3.

  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
  }
  // Now, i is block-scoped, so each iteration has its own i, producing:



  // what will be output of setimeout +promise 

  console.log("start");
  setTimeout(()=> console.log("Timeout"),0);
  Promise.resolve().then(()=> console.log("promise"));
  console.log("end");

//   "Start" logs.
// setTimeout is sent to Web API.
// Promise is added to Microtask Queue.
// "End" logs.
// Microtasks (Promises) execute before setTimeout, so "Promise" logs.
// Finally, "Timeout" logs.