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
console.log(allUnique([1, 2, 3])); 
console.log(allUnique([1, 2, 2]));

//  Sort Array of Strings by Length

const arr = ["banana", "kiwi", "apple", "mango"];
arr.sort((a , b)=>a.length -b.length);
console.log(arr);

// find intersection of two arrays
function findIntersection(arr1, arr2){
  return arr1.filter(item => arr2.includes(item));
}
console.log(findIntersection([1,2,3,4,], [3,4,5]));


// Disable a button after click

<button id="btn">Click me</button>


  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    btn.disabled = true;
    btn.innerText = "Clicked!";
  });


// Find the max number in array 

function maxNUmber(arr){
  return Math.max(...arr);
}
console.log(maxNUmber([1,2,3,4,5]));



// async/await promise 

// create a basic Promise

const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve(" Promise Resolved");
  } else {
    reject(" Promise Rejected");
  }
});

myPromise
  .then(res => console.log(res))
  .catch(err => console.log(err));

  // convert the above program to async await


  function getData(){
    return new Promise(resolve =>{
      setTimeout(()=> resolve("data loaded"),1000);
    });
  }

  async function fetchData() {
    const data = await getData();
    console.log(data);
  }
  fetchData();

  // Fetch data from api using async/ await 


  async function getUsers (){
  try{ 
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
    } catch(err){
      console.log("Error: ", err)
    }
  } 

 getUsers();

 //  Sequential vs Parallel Async Calls