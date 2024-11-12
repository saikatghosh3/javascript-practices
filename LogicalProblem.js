//1. Find the largest number in the array 
// function largestNumber (arr){
//     return Math.max(...arr);
// }
// console.log(largestNumber([1,2,3,4,5,6,7,8]));

// 2. Find a function to check if a given number is prime 
// Prime Number:A prime number is a positive integer that can only be divided evenly by itself and the number 1

// function isPrime (num){
//     if(num<1) return false;
//     for(let i = 2; i<=Math.sqrt(num);i++){
//         if(num %i ===0 ) return false;
//     }
//     return true;
// }
// console.log(isPrime(7));

// *** Reverse a String 
// function  reverseString(str){
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("javascript"));

// ****write a function that retuns the largerst number in an array 
// function largerstNumber(arr){
//     return Math.max(...arr);
// }
// console.log(largerstNumber([1,2,35,6,80]));



//*** */ Write a function to generate the fist n numbers of the Fibonacci sequence 
//  fibonacci ager dui tar addition porer ta 

// function fibonacci(n){
//     let fib = [0,1];
//     for(let i = 2; i<n; i++){
//         fib[i] = fib[i-1]+fib[i -2];
//     }
//     return fib;
// }
// console.log(fibonacci(5));

//***  */ write a function that retuns the Factorial of a given number 

function factorial(num){
    if(num ===0 || num ===1)return 1;
    return num * factorial( num -1);
}
console.log(factorial(5));