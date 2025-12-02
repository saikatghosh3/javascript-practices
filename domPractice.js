// Select an element with id "title" and change its text to "Hello DOM".
const newTitle = document.getElementById("title");
newTitle.innerText = "Hi this is new title";

// Change the background color of a div when a button is clicked.
const  newDiv = document.getElementById("newDiv");
const btn = document.getElementById("btn");
btn.addEventListener('click', ()=>{
    newDiv.style.backgroundColor = "blue"
    
})
