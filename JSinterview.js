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
  