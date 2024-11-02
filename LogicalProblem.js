//1. Find the largest number in the array 
// function largestNumber (arr){
//     return Math.max(...arr);
// }
// console.log(largestNumber([1,2,3,4,5,6,7,8]));

// 2. Find a function to check if a given number is prime 
// Prime Number:A prime number is a positive integer that can only be divided evenly by itself and the number 1

function isPrime (num){
    if(num<1) return false;
    for(let i = 2; i<=Math.sqrt(num);i++){
        if(num %i ===0 ) return false;
    }
    return true;
}
console.log(isPrime(7));