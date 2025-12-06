// Select an element with id "title" and change its text to "Hello DOM".
const newTitle = document.getElementById("title");
newTitle.innerText = "Hi this is new title";

// Change the background color of a div when a button is clicked.
const  newDiv = document.getElementById("newDiv");
const btn = document.getElementById("btn");
btn.addEventListener('click', ()=>{
    newDiv.style.backgroundColor = "blue"
    
})


// hide/show paragraph 
const paragraph = document.getElementById("myParagraph");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener('click', ()=>{
    if(paragraph.style.display === "none"){
        paragraph.style.display = "block";  
    } else {
        paragraph.style.display = "none";
    }
})



// count er functionality

// Display a number on the screen that increases by 1 each time a button is clicked 



const countBtn = document.getElementById("countBtn");
const clickCount = document.getElementById("clickCount");
const clickDecrease = document.getElementById("countBtn2")
let count = 0;

countBtn.addEventListener('click', ()=>{
    count++;
    clickCount.innerText = "Button clicked " + count + " times";
})

clickDecrease.addEventListener('click', ()=>{
    count --;
    clickCount.innerText = "decrease" + count + "times";
})


// show and  hide password 
const passwordInput = document.getElementById("passwordField");
const toggleBtn2 = document.getElementById("togglePasswordBtn");

toggleBtn2.addEventListener('click', ()=>{
    if(passwordInput.type === "password"){
        passwordInput.type = "text";
    }else{
        passwordInput.type = "password";
    }
})
