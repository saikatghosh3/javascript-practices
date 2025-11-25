// Problem 1:
// Write a function `calculateStrikeRate` that takes in two parameters - the runs scored by a batsman and the total number of balls they faced. The function should return the batsman's strike rate, which is calculated as the number of runs scored per 100 balls faced.
// For example, if the batsman scored 45 runs off 30 balls, their strike rate would be calculated as follows:
// (45 / 30) * 100 = 150
// The function should round the strike rate to two decimal places.
// Example Input/Output:
// - calculateStrikeRate(45, 30) should return 150.00
// - calculateStrikeRate(100, 60) should return 166.67
// - calculateStrikeRate(25, 40) should return 62.50

function calculateStrikeRate(runs, balls) {
    if (balls === 0) {
        return 0; 
    }
    const strikeRate = (runs / balls) * 100;
    return parseFloat(strikeRate.toFixed(2));
}
calculateStrikeRate(45, 30);
calculateStrikeRate(100, 60);
calculateStrikeRate(25, 40);


// Have the function `CountPairs` take in a string of lowercase letters and digits. The function should return the count of all pairs of characters in the string that add up to an even number.
// For example, if the input string is "a1b2c3d4e5f6", there are 3 pairs that add up to an even number: "b2", "d4", and "f6". So the function should return 3.
// If there are no such pairs, the function should return 0.
// Examples:
// - `CountPairs("a1b2c3d4e5f6")` should return 3
// - `CountPairs("x1y2z3")` should return 1
// - `CountPairs("a2b2c2d2")` should return 4


function CountPairs(str) {
    let count = 0;

    for (let i = 0; i < str.length - 1; i++) {
        let second = str[i + 1];

       
        if (!isNaN(second) && Number(second) % 2 === 0) {
            count++;
        }
    }

    return count;
}


console.log(CountPairs("a1b2c3d4e5f6")); 
console.log(CountPairs("x1y2z3")); 
console.log(CountPairs("a2b2c2d2")); 



// Write a function called `reverseString` that takes a string as input and returns the reverse of that string. Your function should not use the built-in `reverse()` method.
// Example Input/Output:
// - reverseString('hello') should return 'olleh'
// - reverseString('racecar') should return 'racecar'
// - reverseString('12345') should return '54321'


function reverseString(str){

    let reversed = '';
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }   
    return reversed;        
}
console.log(reverseString('hello'));
console.log(reverseString('racecar'));
console.log(reverseString('12345'));    


// Problem 4:
// Write a function isPalindrome that takes in a string and returns true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.
// Example Input/Output:
// isPalindrome("racecar") should return true
// isPalindrome("hello") should return false
// isPalindrome("rotator") should return true
// isPalindrome("peep") should return true


function isPalindrome(str){
    const length = str.length;
    for(let i = 0; i < length / 2; i++){
        if(str[i] !== str[length - 1 - i]){
            return false;
        }   
    }
    return true;    
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("rotator"));
console.log(isPalindrome("peep"));  


// Write a function `mergeArrays` that takes in two arrays of integers and returns a new array that contains all the elements from both arrays, sorted in ascending order.
// For example, if the two input arrays are:
// [1, 3, 5, 7, 9]
// [2, 4, 6, 8, 10]
// The function should return the following array:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Example Input/Output:
// - mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// - mergeArrays([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// - mergeArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]

function mergeArrays(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    mergedArray.sort((a, b) => a - b);
    return mergedArray;
}       
console.log(mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
console.log(mergeArrays([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]));
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));



// Write a function called `findShortestWord` that takes in a string as a parameter and returns the shortest word in the string. If there are two or more words that are the same length and shortest, return the first word from the string with that length. Ignore punctuation and assume the string will not be empty. Words may also contain numbers.
// For example, if the input string is "The quick brown fox jumps over the lazy dog", the function should return "The".
// Example Input/Output:
// - findShortestWord("The quick brown fox jumps over the lazy dog") should return "The"
// - findShortestWord("Hello world") should return "world"
// - findShortestWord("Today is Monday") should return "is"

function findShortestWord(str) {
    const words = str.split(' ');
    let shortestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortestWord.length) {
            shortestWord = words[i];
        }
    }

    return shortestWord;
}

console.log(findShortestWord("The quick brown fox jumps over the lazy dog"));
console.log(findShortestWord("Hello world"));
console.log(findShortestWord("Today is Monday"));


// Suppose you are building a student database for your class that will track student’s names and their marks. Your class has 40 students but now you are seeing that there are 41 entries in your database so you decide to check the database. And you find out that you have mistakenly uploaded a student’s name twice.
// Task
//  Write a `removeDuplicates` function that takes in an array of names and returns a new array with any duplicates removed.
// Sample Input:
// Student_names = [‘Zara’, ‘Sadia’ , ‘Mahin’ , ‘Adnan’ , ‘Maisha’, ‘Adnan’, ‘Faiyaz’]
// Sample Output :
// Student_names = [‘Zara’, ‘Sadia’ , ‘Mahin’ , ‘Adnan’ , ‘Maisha’, ‘Faiyaz’]

function removeDuplicates(names) {
    const uniqueNames = [];
    for (let i = 0; i < names.length; i++) {
        if (!uniqueNames.includes(names[i])) {
            uniqueNames.push(names[i]);
        }
    }
    return uniqueNames; 
}

const Student_names = ['Zara', 'Sadia', 'Mahin', 'Adnan', 'Maisha', 'Adnan', 'Faiyaz'];
const uniqueStudentNames = removeDuplicates(Student_names);
console.log(uniqueStudentNames);


// another way 
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates(['Zara', 'Sadia', 'Mahin', 'Adnan', 'Maisha', 'Adnan', 'Faiyaz']));



// Write a function `createBookList` that takes in three parameters: `bookTitles`, an array of book titles, `authorNames`, an array of corresponding author names and ‘number of copies available’ , an array of corresponding copies available for the book.
// Write a function ‘Add Copies’ that takes two parameters : `bookTitle` and the number of copies you are adding to that book. The function should add copies to that particular book.
// Write a function ‘Sell Book’ that takes two parameters : `bookTitle` and the number of copies you are selling of that book. The function should deduct copies of that particular book.
// Write a function ‘GetDetails’ that takes no parameters and returns all the titles of the book in the bookTitles array ,the author names of the book in the `authorNames’ array and the number of copies available of the corresponding books, which should be updated after adding or selling a book.
// .
// Sample Input:
// createBookList(‘Bohubrihi’ , ‘Humayun Ahmed’ , 10)
// Add Copies(‘Bohubrihi’ , 5)
// Updates number of copies available of Bohubrihi to 15)
// ‘Sell Book’(‘Bohubrihi’ , 3)
//  Updates number of copies available of Bohubrihi to 12)
// ‘GetDetails’()
//   Returns (“Bohubrihi” by “Humayun Ahmed” number of copies available 12)
// Hint :Make 3 arrays of the same length.


function createBookList(bookTitles, authorNames, copiesAvailable) {
    this.bookTitles = bookTitles;
    this.authorNames = authorNames;
    this.copiesAvailable = copiesAvailable;

    this.AddCopies = function(bookTitle, numberOfCopies) {
        const index = this.bookTitles.indexOf(bookTitle);
        if (index !== -1) {
            this.copiesAvailable[index] += numberOfCopies;
        }
    };

    this.SellBook = function(bookTitle, numberOfCopies) {
        const index = this.bookTitles.indexOf(bookTitle);
        if (index !== -1 && this.copiesAvailable[index] >= numberOfCopies) {
            this.copiesAvailable[index] -= numberOfCopies;
        }
    };

    this.GetDetails = function() {
        const details = [];
        for (let i = 0; i < this.bookTitles.length; i++) {
            details.push(
                `"${this.bookTitles[i]}" by "${this.authorNames[i]}" number of copies available ${this.copiesAvailable[i]}`
            );
        }
        return details;
    };
}

// Create the book list
const myBookList = new createBookList(
    ['Bohubrihi'],
    ['Humayun Ahmed'],
    [10]
);

myBookList.AddCopies('Bohubrihi', 5); 
myBookList.SellBook('Bohubrihi', 3);

console.log(myBookList.GetDetails());




// Problem 9:
// Write a Javascript Program that takes String as a parameter and checks if the parameters are number or text. If the parameters are numbers then it will return a summation of the numbers. If the parameters are not numbers then it will generate a text by concatenating the strings.
// Sample Input:
// parseString(“21” , “24’ , “40”)
// parseString(“Hello” , “Alpha”)
// parseString(“Summer” , “2022”)
// Sample Output:
// 85
// Hello Alpha
// Summer 2022


function parseString(...args){
    let sum = 0;
    let text = '';
    for (let i = 0; i<args.length; i++){
        if(isNaN(args[i])){
            text += args[i] + ' ';
        } else {
            sum += Number(args[i]);
        }
    }
    return text.trim() || sum;
}

console.log(parseString("21" , "24" , "40"));
console.log(parseString("Hello" , "Alpha"));
console.log(parseString("Summer" , "2022"));    



// Problem 10:
// Given an array exists that has integers, write a function called "getPositiveNumbers" that takes the entire array as input and returns a new array containing only the positive numbers from the original array.
// Sample Input : [2, -5, 10, -3, 8, -1, 0, 7]
// Sample Output: [2, 10, 8, 7]
function getPositiveNumbers(arr){
    const positiveNumbers = [];
    for (let i = 0; i<arr.length; i++){
        if(arr[i]>0){
            positiveNumbers.push(arr[i]);
        }
    }
    return positiveNumbers;
}

console.log(getPositiveNumbers([2, -5, 10, -3, 8, -1, 0, 7]));



// Write a function called "findMissingNumber" that takes an array of consecutive integers from 1 to n, with one number missing, and returns the missing number.
// For example:
// Input: [1, 2, 3, 5, 6, 7, 8]
// Output: 4

function findMissingNumber(arr) {

    const n = arr.length + 1;
    // 1 থেকে N পর্যন্ত সব সংখ্যার যোগফল = N * (N + 1) / 2
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum; 
}
console.log(findMissingNumber([1, 2, 3, 5, 6, 7, 8]));



// Problem 12:
// Write a function called "getMaxProduct" that takes an array of integers as input and returns the maximum product that can be obtained by multiplying any two distinct elements from the array.
// Sample Input: [2, 3, 5, 6, 7]
// Sample Output: 42 (obtained by multiplying 6 and 7)

function getMaxProduct(arr) {
    let max1 = -Infinity;
    let max2 = -Infinity;   
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if (arr[i] > max2 && arr[i] !== max1) {
            max2 = arr[i];
        }
    }
    return max1 * max2;
}
console.log(getMaxProduct([2, 3, 5, 6, 7]));

// or 

function getMaxProduct(arr) {
    
    arr.sort((a, b) => b - a);

   
    return arr[0] * arr[1];
}

console.log(getMaxProduct([2, 3, 5, 6, 7]));


// Problem 13:
// Write a function called "findPrimeNumbers" that takes an array of positive integers as input and returns a new array containing only the prime numbers from the original array.
// For example:
// Input: [2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: [2, 3, 5, 7]


function isPrime(num){
    if(num <=1) return false;
    for (let i=2; i<= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;

}
function findPrimeNumbers(arr){
    const primeNumbers = [];    
    for (let i=0; i< arr.length; i++){
        if(isPrime(arr[i])){
            primeNumbers.push(arr[i]);
        }
    }
    return primeNumbers;
}
console.log(findPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10]));


// Problem 14:
// Write a program that prints a triangle asterisk (*). The number of rows in the triangle is determined by the user's input. Each row should contain a  string where the characters are repeated in a mirrored pattern.
// For example, if the user inputs 5, the program should print:
//       *
//     ***
//    ****
//   *****
//  ******

function printTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let spaces = ' '.repeat(rows - i);
        let stars = '*'.repeat(i * 2 - 1);
        console.log(spaces + stars);
    }
}

printTriangle(5);



// Problem 15:
// Write a program that prints a triangle of palindromic strings. The number of rows in the triangle is determined by the user's input. Each row should contain a palindromic string where the characters are repeated in a mirrored pattern.
// For example, if the user inputs 5, the program should print:
//       1
//     232
//    34543
//   4567654
//  567898765



function printPalindromicTriangle(rows) {
    for (let i = 1; i <= rows; i++) {

     
        let spaces = " ".repeat(rows - i);

      
        let inc = "";
        for (let j = i; j < i + i; j++) {
            inc += j;
        }

       
        let dec = "";
        for (let j = i + i - 2; j >= i; j--) {
            dec += j;
        }

        console.log(spaces + inc + dec);
    }
}

printPalindromicTriangle(5);


// Problem 16:
// A Fibonacci number is a sequence of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1. In mathematical terms, the Fibonacci sequence is defined as:
// F(n) = F(n-1) + F(n-2) for n > 1
// So, the Fibonacci sequence begins as follows: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on. Each subsequent number in the sequence is the sum of the two preceding numbers. The Fibonacci sequence has numerous mathematical properties and applications in various fields, including mathematics, computer science, and nature.
// Task 1:
// Write a function called "fibonacciSequence" that takes a positive integer n as input and returns an array containing the first n numbers in the Fibonacci sequence.
// Sample Input: 8
// Sample Output: [0, 1, 1, 2, 3, 5, 8, 13]
// Task 2: Write a function called "isFibonacciNumber" that takes a number as input and returns true if the number is a Fibonacci number, and false otherwise.
// For example:
// Input: 8
// Output: true
// Input: 10
// Output: false


function fibonacciSequence(n) {
    const fibSeq = [0, 1];  
    for (let i = 2; i < n; i++) {
        fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
    }
    return fibSeq.slice(0, n);
}
console.log(fibonacciSequence(8));
function isFibonacciNumber(num) {
    if (num < 0) return false;  
    let a = 0, b = 1;       
    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b === num;
}   
console.log(isFibonacciNumber(8));
console.log(isFibonacciNumber(10));



// or 

function fibonacciSequence(n) {
    const result = [];

    let a = 0, b = 1;
    let count = 0;

    while (count < n) {
        result.push(a);
        let next = a + b;
        a = b;
        b = next;
        count++;
    }

    return result;
}

console.log(fibonacciSequence(8));





// Problem 17:
// Write a function called "findMedian" that takes an array of numbers as input and returns the median value of the numbers.
// For example:
// Input: [5, 2, 8, 1, 9]
// Output: 5
// Input: [4, 2, 7, 1, 9, 10]
// Output: 5.5


function findMedian(arr) {
    arr.sort((a, b) => a - b);
    const length = arr.length;
    const mid = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2;
    } else {
        return arr[mid];
    }


}console.log(findMedian([5, 2, 8, 1, 9]));
console.log(findMedian([4, 2, 7, 1, 9, 10]));

// Problem 18:
// Write a function called ‘countCharacter’ that takes a string as parameters and returns an object with character count.
// For Example:
// Input: “Hello”
// Output: {H:1, e:1, l: 2, o:1}


function countCharacter(str) {
    const charCount = {};       
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    return charCount;
}
console.log(countCharacter("Hello"));