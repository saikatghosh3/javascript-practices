// console.dir(window)
// let firstEl = document.querySelector('p');
// console.dir(firstEl);


// document.querySelector("div").children; 
// avove line should be written in console.

// how to access the innertext
// let div = document.querySelector("div");
// console.dir('div');

// then in the innertext we should write    div.innerText  then it will show us the contains of div here back slash means next elements contain

// now if we write div.innerHTML the it will print the contain with the html tag
// Here we can also change innertext and innerhtml ex: 
// let h2 = document.querySelector('h2');
// now in the console we can write h2.innerText = "Let's learn JavaScript"

// now in the style section if we set visibility: hidden; we can also see that by h2.textContent , this will show us the hidden text content.

// problem : Create a h2 element with text "hello javascript" . append from saikat learning to this text using js
// create 3 divs with common class name "boc". assess them $ add some unique text to each of them.
 let div = document.querySelector('div');
 console.log(div);
 div.getAttribute("id");
 
 // here we will insert a new button by append method
 //first we have to create an element 
 let newBtn = document.createElement("button");
 newBtn.innerText = "Click me!";
 console.log(newBtn);
//  div.append(newBtn);
 div.prepend(newBtn);
//  div.before(newBtn);
//  div.after(newBtn);
 // we can add new things anywhere we wish but first we have to access that that element then create new elemet than we will add

//  here we will create new heading without touching the html contain
let newHeading = document.createElement("h2");
newHeading.innerText = " Hi, am new heading";
 document.querySelector("body").prepend(newHeading);


//  for delete elememt : first we have to select that node 
let para = document.querySelector("p");
para.remove();

// append child property example :

    // <div id="parent">
    //     <p>This is an existing paragraph.</p>
    // </div>

    
    //     // Create a new paragraph element
    //     const newParagraph = document.createElement('p');
        
    //     // Add some text content to the new paragraph
    //     newParagraph.textContent = 'This is a new paragraph added with appendChild.';

    //     // Get the parent element by its ID
    //     const parentDiv = document.getElementById('parent');

    //     // Append the new paragraph to the parent div
    //     parentDiv.appendChild(newParagraph);