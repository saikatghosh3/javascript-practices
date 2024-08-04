// This is one way to doing it

// let modeBtn = document.querySelector("#mode");
// let currentMode = "Light";
// modeBtn.addEventListener("click", ()=> {
//     if(currentMode === "Light") {
//         currentMode = "dark";
//         document.querySelector("body").style.backgroundColor ="black";
//     }else{
//         currentMode = "Light"
//         document.querySelector("body").style.backgroundColor ="white";
//     }
//     console.log(currentMode);
// });

// another way of doing it. but we have to make a class in the css folder
let modeBtn = document.querySelector("#mode");
let currentMode = "light";
 let body = document.querySelector("body");
 modeBtn.addEventListener("click", ()=> {
    if(currentMode ==="Light"){
        currentMode = "dark";
        body.classList.add('dark');
    }else{
        currentMode ="light";
        body.classList.add('light');
    }
 });