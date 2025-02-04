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

  // Explain how map , filter , reduce work 
  // map: transform each element in array 
  let numbers = [1,2,3,4];
  let double = numbers.map(n=> n * 2);
  console.log(double);

  // returns a new array with elemensts that satisfy a condition
  const nums = [1,2,3,4,5,6];
  const even = nums.filter(n => n% 2 === 0);
  console.log(even);
