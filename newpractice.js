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
// const numbers4 = [1,3,4,5,6,7]
// const matchCondition = numbers4.filter(num => num >3);
// console.log(matchCondition);
// find index  retuns the first element that matches the condition 
// if do not match it will return the -1
// const matchCondition1 = numbers4.findIndex(num => num > 3);
// console.log(matchCondition1)

// some : it cheks if any  element match the conditon
// returns in true or false 

// const someElement = numbers4.some(num => num <2);
// console.log(someElement);


// object : 
// inside object: here  this refers to the obj
const obj = {
    name: "Saikat",
    show: function () {
      console.log(this.name);
    },
  };
  
  obj.show();
 
//   inside arrow function : here this refers to outer scope means window scope.
  const obj1 = {
    name: "Saikat",
    show: () => {
      console.log(this.name);
    },
  };
  
  obj1.show();

//   another example of arrow function 
const user = {
    name: "Saikat",
    age: 25,

showNormal: function () {
    console.log(`Normal Function: ${this.name}, ${this.age}`);
  },
// as it is a normal function it this will refer to user 

showWithArrowTimeout: function () {
    setTimeout(() => {
      console.log(`Timeout Arrow: ${this.name}, ${this.age}`);
    }, 1000);  
//  as it is arrow funciton it does't have this. it will take this from outer function.

},
}


// Object.is 
// Object.is() is a method used to compare two values to see if they are the same value . 
// syntax:
// Object.is(value1, value2);
// true is the values are same 
// false if the values are different

// difference between === and Object.is 

// === does not consider NaN equal to NaN 
// Object.is() consider NaN equal to NaN

// and

// console.log(0 === -0);           // true
// console.log(Object.is(0, -0));   // false


// 

for(let  i = 1; i<=10; i++){
  if (i===5){
    console.log("breaking the loop at ", i)
    break; 
  }
  console.log(i);
}

for (i =1; i<=10; i++){
  if(i=== 5){
    console.log("skipping  at ", i);
     continue; 
  }
  console.log(i);
}