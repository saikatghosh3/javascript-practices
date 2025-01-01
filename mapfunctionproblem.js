// question 1:
// Write a function that takes an array of numbers and returns a new array with each number doubled.
//  function doubleNumbers(arr){
//         return arr.map((num => num * 2));
//  }

//  const numbers = [1,2,3,4,5];
//     console.log(doubleNumbers(numbers));

    // question 2:
    // You have an array of objects where each object represents a person with a name property.
    //  Write a function to return an array of names.

    // function namesOnly(arr){
    //     return arr.map(person => person.name)
    // }

    // const people = [
    //     {name: "John", age: 20},
    //     {name: "Smith", age: 30},
    //     {name: "Doe", age: 40}
    // ]

    // console.log(namesOnly(people));

    // question 3:
//     Write a function that takes an array of temperatures in Celsius and converts them to Fahrenheit using the formula:
// °F = (°C × 9/5) + 32

// function toFahernheit(arr){
//     return arr.map(temp => (temp * 9/5) + 32);
// }
// const temp = [12, 20, 30,40];
// console.log(toFahernheit(temp));

//  question 4:
// Write a function that returns the square root of each number in the array.

// function squreRoot(arr){
//     return arr.map(num =>Math.sqrt(num));
// }

// const numbers = [1,4,9,16,25];
// console.log(squreRoot(numbers));

// question 5:
// Write a function that takes an array of strings and returns
//  a new array where each string is prefixed with its index.

// function addIndex(arr){
//     return arr.map ((str, index)=> `${index} ${str}`);
// }

// const strings = ["apple", "banana", "mango", "orange"];

// console.log(addIndex(strings));

// question 6:
// Write a function that takes an array of numbers, 
// filters out the odd numbers, and then doubles the remaining numbers.

//  function filterandDouble(arr){
//         return arr.filter(num=> num % 2===0).map(num => num *2);
//  }

//  const numbers = [1,2,3,4,5,6,7,8,9,10];
//  console.log(filterandDouble(numbers));

// question 7:
// You have an array of arrays containing numbers. Write a function to flatten the array, 
//  square each number, and return the sorted result.

// function flatternAndSquare(arr){

//     return arr.flat().map(num => num * num).sort((a,b)=> a-b);
// }

// const numbers = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(flatternAndSquare(numbers));


// question 8:
// Write a function that takes an array of email addresses. Transform each email to lowercase, trim whitespaces, and validate 
// if they contain "@" and ".". Return an array of valid emails.

// function validateEmails(arr){
//     return arr.map(email => email.toLowerCase().trim()) .filter(email => email.includes("@") && email.includes("."));


// }

// const emails = ['  JOHN.DOE@Example.com  ', 'jane@domain', 'valid.email@domain.com'];
// console.log(validateEmails(emails));


// ***************problems based on function****************

//question1:
// Write a function longestWord(sentence) that returns the longest word in a sentence.

function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

// Example Usage
console.log(longestWord("The quick brown fox jumps over the lazy dog")); 
  

//question2:
//Write a curried function multiply(a)(b)(c) that multiplies three numbers.

function multiply(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        }
    }
}

console.log(multiply(2)(3)(4)); // 24

//curried function is a function that takes multiple arguments one at a time.

question3:
// Write a function sum(a) that can sum any number of arguments using infinite currying.
function sum(q){
    return function (p){
        if(b!== undefined){
            return sum(q+p);
        }
        return p;
    }
}

console.log(sum(1)(2)(3)(4)(5)()); // 15
console.log(sum(1)(2)(3)()); // 6

    
