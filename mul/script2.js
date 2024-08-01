console.dir(window)
let firstEl = document.querySelector('p');
console.dir(firstEl);


// document.querySelector("div").children; 
// avove line should be written in console.

// how to access the innertext
let div = document.querySelector("div");
console.dir('div');

// then in the innertext we should write    div.innerText  then it will show us the contains of div here back slash means next elements contain

// now if we write div.innerHTML the it will print the contain with the html tag
// Here we can also change innertext and innerhtml ex: 
// let h2 = document.querySelector('h2');
// now in the console we can write h2.innerText = "Let's learn JavaScript"

// now in the style section if we set visibility: hidden; we can also see that by h2.textContent , this will show us the hidden text content.