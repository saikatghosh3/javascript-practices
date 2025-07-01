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

// count the frequency of an Element 
const arr = ["a", "b", "c", "b", "c,"];
const freq = {};
arr.forEach(item=> {
    freq[item] = (freq[item] || 0) +1;
});
console.log(freq);

// check Anagram (same letter, different order)

function isAnagram(a,b){
    return a.split('').sort().join('') === b.split('').sort().join('')
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"))

// reverse words in Sentence
const sentece = "I love javascript";
const reversed = sentece.split(' ').reverse().join(' ');
console.log(reversed);

// find intersection of Two arrays
function intersection (arr1, arr2){
    return arr1.filter(item => arr2.includes(item));
}

console.log(intersection([1, 2, 3], [2, 3, 4]));


// more problem . 
// Reverse the string without reverse
 
function reverse(str){
    let reversed = ""
    for(char of str){
        reversed = char + reversed;
    // reversed er vitor last character first a jabe then tar ager ta ex olleh ei vabe
    }
    return reversed;
}
console.log(reverse("hello"));

// find the Longest word in a sentence
function longestWord (sentece){
    const words = sentece.split(" ");
    let Longest = "";
    for( let word of words){
       if(word.length > Longest.length){
        Longest = word;
       }
    
    }
    return Longest;
}
console.log(longestWord("i love web development"));

// count the vowel with regular exp
function countVowel (str){
    return str.match(/[aeiou]/gi)?length || 0 
}
console.log(countVowel("javaScript"));

// check if a number is prime
function isPrime(n){
    if(n<=1 ) return false;
    for(let i = 2; i<Math.sqrt(n); i++){
        if(n % i=== 0 ) return false;
    }
    return true;
}
console.log(isPrime(7));

// Capitalize first letter of sentence 
function Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
    // str.slice(1) will return rest of the str
}
console.log(Capitalize("hello world"));



// compare two array is equal.

function arraysEqual(a,b){
    if (a.length !== b.length) return false;
   
    for(let i = 0; i<a.length; i++){
        if (a[i] !== b[i]) return false;
    }

}
return true;


// Count occurrences of letter in a string 
function countLetter(str, letter){
    let count = 0;
    for(let char of str){
        if(char === letter ) count ++;
    }
    return count ;
}

console.log(countLetter("banana", "a"));


// Find second Largest Number in array

function secondLargest (arr){
    const unique = [...new Set(arr)];
    unique.sort((a,b)=>b-a);
    return unique[1];
}
console.log(secondLargest([1,2,3,4,5,6,7,7,9,9,10]));


// Find the Factorial of a Number 

function Factorial(n){
    if(n === 0 || n ===1) return 1;
    return n * Factorial(n-1);
}
console.log(Factorial(5));

// Get unique Character from a string
function uniqueChar(str){
    return [...new Set(str)].join(' ');
}
console.log(uniqueChar("aaaabbbccc"))