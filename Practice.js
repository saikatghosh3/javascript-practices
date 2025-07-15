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

 function delay (ms , value){
  return new Promise (resolve => setTimeout(()=> resolve(value),ms));

 }

//  sequential  

 async function runSequential(){
  const a = await delay(1000, "A");
  const b = await delay(1000, "B");
  console.log(a,b);
 }

//  paraller

async function runParaller() {
  const [c,d] = await Promise.all([
    delay(2000, "C"),
    delay(2000, "D")
  ])

  
}


// Using promise.all for multiple api

async function  getAllData() {
  try{
    const [posts, users] = await Promise.all([
      fetch("https: //jshonplaceholder.typicode.com/posts").then(res=> res.json()),
      fetch("https:// jshonplacehoder.typecode.com/users").then(res => res.json())
           ]);
           console.log("posts:", posts.length, "| Users: ", users.length);
  }catch(err){
    console.log("Error loading data:", err);
  }
}


getAllData();

// catch error in async function 

async function failExample() {
  try{
    let res = await fetch("https//invalid.api");
    let data = await res.json();
    console.log(data);
  } catch(err){
    console.error("Error caught", err.message);
  }
}
failExample();


// race multiple promise 

const fast = new Promise(resolve => setTimeout(()=> resolve("fast"),500));
const slow = new Promise(resolve => setTimeout(()=> resolve("slow"),1000));

Promise.race([fast, slow]).then(result => console.log(result));


// Load multiple urs one by one (sequentially)
const urls = [
 "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

async function  loadSequentially(urls) {
  for (let url of urls){
    const res = await fetch (url);
    const data = await res.json(data);
    console.log("Loaded:", data.title);
  }
}

loadSequentially(urls);

// Real case where you want one API to finish before calling the next 
// (e.g., uploading files in order).

// Parallel API calls with Error Hnadling

async function  fetchData() {
  const urls = [  "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/invalid", ]



    const promises = urls.map(url=> fetch(url).then(res=> res.jshon()).catch(()=> "Error loading"));

    const results = await Promise.all(promises);
    console.log(results);
}

fetchData();

// Check internet conneciton (real case)

async function checkInternet() {
  try {
    await fetch("https://jsonplaceholder.typicode.com/posts/1", { method: "HEAD" });
    console.log(" Online");
  } catch {
    console.log(" Offline");
  }
}
checkInternet();

//  Disable submit button until All inputs are filled. 
// Only enable the button when all inputs have values 

<html>
<input id="name" placeholder="Name"/> <br/> 
<input id="email" placeholder="Email"/> <br/> 
<button id="submit" disabled> Submit</button>
</html>

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const button = document.getElementById("submit");

function checkInputs(){
  if(nameInput.value && emailInput.value){
    button.disabled = false;
  } else{
    button.disabled = true;
  }
}

nameInput.addEventListener("input", checkInputs);
emailInput.addEventListener("email", checkInputs);


// Show loading while fetching data 

 <p id="output">Loading... </p>

 async function loadPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  document.getElementById("output").innerText = data.title;
 }
 loadPost();

//  Toggle dark mode 
// clicking the button dark/light theme. 
<button id="toggle">Toogle Theme </button>

const btn = document.getElementById("toggle");

btn.addEventListener("click", ()=>{
  document.body.classList.toggle("dark");
});

<style>
  .dark {
    background: #111;
    color: white;
  }
</style>

// countdown Timer
// create a 10 second coundown after clicking a button  

<button id= "satrt"> Start countdown</button>
<p id="timer"> 5</p>

document.getElementById("start").addEventListener("click", ()=>{
  let count = 5;
  const timer = document.getElementById("timer");

  const interVal = setInterval(()=>{
    count--;
    timer.innerText = count; 
    if(count === 0) clearInterval(interVal);
  },1000);
});


//highligh input field on focus 
// when the user clicks inside the input, change its border color.
<input id="name" placeholder="Enter name" / >
const input = document.getElementById("name");
input.addEventListener("focus", ()=>{
  input.style.border = "2px solid blue";
});

input.addEventListener("blur", ()=>{
  input.style.border = "1px solid gray";
})

// convert textarea character to uppercase 

<textarea id= "note" placeholder ="type here ...."></textarea>

const textarea = document.getElementById("note");
textarea.addEventListener("input", ()=>{
  textarea.value = textarea.value.toUpperCase();
});

// show password toggle 
{/* clicking checkbox toggles password visibility  */}

input id = "pwd" type = "password" placeholder = "Enter password"/>
<label><input type="checkbox" id ="showpwd"></input></label>
const pwd = document.getElementById("pwd");
const toggle = document.getElementById("showpwd") 

toggle.addEventListener("change", ()=>{
  pwd.type = toggle.checked ? "text" : "password";
});