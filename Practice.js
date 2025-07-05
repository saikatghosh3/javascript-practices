// Get Unique character from a string

function UniqueChars(str){
    return [...new Set(str)].join('')
}

console.log(UniqueChars("abcccceddddflkfj"));

// convert number to array of digits


function toDigit(num){
    return num.toString().split('').map(Number);
}
console.log(toDigit(12345));

// check if all elements are unique

function allUnique(arr) {
  return new Set(arr).size === arr.length;
}
console.log(allUnique([1, 2, 3])); // true
console.log(allUnique([1, 2, 2]))