// Merge two sorted arrays without duplicates

// function mergeSrotedArrays(arr1, arr2){
//     return [...new Set([...arg1, ...arg2])].sort((a,b)=> a-b);
// }

// console.log(mergeSrotedArrays[1,2,3],[2,3,5]);

// Problem: Write an arrow function that finds the intersection of two arrays.

// const intersection = (arr1, arr2)=>{
//     return arr1.filter((num)=> arr2.includes(num));
// };
// console.log(intersection([1,2,3], [2,3,5]));

// Problem: Write an arrow function that reverses the words in a string

// const reverseWords = (str)=> str.split(' ').reverse().join(' ');
// console.log(reverseWords("The quick brown fox jumps over the lazy fox"));

//  problem: capitalize the first letter on each string
// const capitalizeWords = (str)=> 
//     str 
// .split(" ").map((word)=> word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
// console.log(toUpperCase("hello world"));

// Problem: Write a function to find the longest word in a sentence.
 const findLongestWord = (sentence)=> {
    return sentence.split(" ").reduce((longest, current)=>
    current.length > longest.length ? current: longest, ' ');
 };
 console.log(findLongestWord("the quick brown fox jumps over the lazy dog"));


