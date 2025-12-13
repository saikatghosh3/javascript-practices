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




// add and delete 

const addButton = document.getElementById("add-item");
const inputText = document.getElementById("input-text");
const list = document.getElementById("item-list");

addButton.addEventListener("click", () => {
    const newItem = document.createElement("li");

    // Item text
    const textSpan = document.createElement("span");
    textSpan.innerText = inputText.value;

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.marginLeft = "10px";

    // Delete functionality
    deleteBtn.addEventListener("click", () => {
        newItem.remove();
    });

    // Add text + delete button inside li
    newItem.appendChild(textSpan);
    newItem.appendChild(deleteBtn);

    // Add li to the list
    list.appendChild(newItem);

    // Clear input
    inputText.value = "";
});




// Change Image on Click
const changeRealImage = document.getElementById("changeRealImage");
 const changeImage = document.getElementById("changeImage");

 changeImage.addEventListener("click",()=>{
   
    changeRealImage.src = "img2.jpg";
 })
        
 

//  simple form valdiation

  const form = document.getElementById('myForm');
  const messageBox = document.getElementById('form-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    
    const inputs = form.querySelectorAll('input:not([type="button"]):not([type="submit"])');

    let hasEmpty = false;

    inputs.forEach(input => {
      if (input.value.trim() === '') {
        hasEmpty = true;
      
        input.style.outline = '2px solid #ff4d4f';
      } else {
        input.style.outline = ''; 
      }
    });

    messageBox.textContent = '';

    if (hasEmpty) {
      messageBox.textContent = 'Please fill all fields';
      messageBox.style.color = 'red';
    } else {
      messageBox.textContent = 'Submitted successfully';
      messageBox.style.color = 'green';

    }
  });


  // chnage Text Color 
const colorChange = document.getElementById("colorChange");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

btn1.addEventListener("click", () => {
    colorChange.style.color = "red";
});

btn2.addEventListener("click", () => {
    colorChange.style.color = "blue";
});

btn3.addEventListener("click", () => {
    colorChange.style.color = "green";
});



// disable button after one click 
const btn5 = document.getElementById("btn5");
btn5.addEventListener("click", () => {
    btn5.disabled = true;     // disable the button
    btn5.innerText = "Disabled";  // optional: change button text
});



// Display Input Value in Real Time
const input = document.getElementById("input");
const paragraph1 = document.getElementById("paragraph");


input.addEventListener('input', ()=>{
    paragraph1.innerText = input.value;

})


//Dropdown show selected vlue 
// Create a <select> dropdown.
// When the user selects an option, display the selected value below it.

const selectItem = document.getElementById("selectItem");
const displayItem = document.getElementById("displayItem");

selectItem.addEventListener("change", () => {
    displayItem.innerText = selectItem.value;
});

