// Print numbers 1–20
// If divisible by 3 → “Fizz”
// If divisible by 5 → “Buzz”
// If both → “FizzBuzz”

for(let i = 1; i<=20; i++){
    if(i%3 === 0 && i%5=== 0 )console.log("FizzBuzz");
    else if(i%3) console.log("Fizz");
    else if(i%5) console.log("Buzz");
    else console.log(i);

}

// remove the duplicate form arr

const arr = [1,3,4,5,6,7,7,7,7,8,9,9,9]
const unique = [...new Set(arr)];
console.log(unique);