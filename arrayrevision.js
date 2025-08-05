// filter
// original array ke change kore na. 
// new result akta new array er vitor dei 

let numbers = [1,3,5,6,7,8];
let newNunbers = numbers.filter((num)=>num >3);
console.log(newNunbers);

console.log(numbers);


// find metod 
// first  j element pabe only seita return korbe
// main array aki thakbe 
const findnumbers = numbers.find((num)=>num>3);
console.log(findnumbers);
console.log(numbers);

// findIndex method 
// index number retun kore 
// original array k same rakhe 

const findIndexnumbers = numbers.findIndex((num)=>num>3);
console.log(findIndexnumbers);
console.log(numbers);


// slice  method
// startindex and endindex hisabe kaj Kore 
// startindex retun kore but endindex retun kore na 
// sting k sting  and array k array akare retun kore 
// original content  ak e rokom thake



const slice =  numbers.slice(1,5);
const slice1 = numbers.slice(1);
console.log(slice);
console.log(slice1);
console.log(numbers);

const text = "hello, world!";
const slice2 = text.slice(7, 12);
console.log(slice2);


// concat method 
// new element plus kore dei  new array hisabe retun kore
// but ager array k change kore na 

const numbers1 = numbers.concat(9,10,11);
console.log(numbers1);
console.log(numbers);

// splice method 
// splice(starting index , how many elements i want to remove , which elements i want to add there) 

// map method 

const words = ['hello', 'world', 'javascript'];
const uppercase = words.map(word => word.toUpperCase());
console.log(uppercase);
console.log(words);


// double the number 

const randomNumber = [1,2,3,4,5];
const double = numbers.map(num => num * 2);
console.log(double);








// ***************The below examples modifies the original array*********** 

 let fruits = ['apple', 'banana', 'orange','guava', 'mango'];
 fruits.splice(1,2,"jackfruit");
 console.log(fruits);
//  output is ['apple', 'jackfruit', 'guava', 'mango'] 
 
let names =["saikat", "ghosh", "Tonoy", "Babu"];
names.push("sk");
console.log(names);





// New concept  *******************multidimentational array ********************************


const arr = [
    ["saikat" , 28, "jashore"],
    ["Tonoy" , 25, "dhaka"],
    ["jhon" , 31, "England"],
]

console.log(arr[0][2]);



const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}


***************** inside for loop  i is index *************************

const array = ["apple", "banana", "orange"];

for(let i = 0; i<array.length; i++){
    console.log(`index: ${i}`);
    console.log(`value: ${array[i]}`);
}

// important
// why <array.length   why not   <= array.length   ?


// length = 1,2,3
// and index is 0,1,2
//  so if we want to iterate over whole array  we should write <arr.length  



// some problem solving 

// print the name of every item 
const items = [
  ["Apple", 120],
  ["Banana", 60],
  ["Orange", 100]
];


for (let i = 0; i < items.length; i++) {
  console.log(`name: ${items[i][0]}`);
}


// or for each  
items.forEach(item=> {
    console.log(`name: ${item[0]}`);
})

// if we want to make new array with name then the code will be 


const names = items.map(item => item[0]);
console.log(names);

// [ 'Apple', 'Banana', 'Orange' ]


// display items price over 1000;

const products =[ ["Bag", 900],
 ["shoes", 1200], 
["watch", 1500]];

for(let i= 0; i<products.length; i++){
    const name = products[i][0];
    const price = products[i][1];

    if(price > 1000){
        console.log(name);
    }
}

// print string and number differently

const mix = [
    ["jhon", 28],
    ["madmax", 31],
    ["Bolod", 25],
]

for( let i = 0; i< mix.length; i++){
  const name = mix[i][0];
  const value = mix[i][1];

   console.log(`Name : ${name} , Age: ${value}`);
  
}
