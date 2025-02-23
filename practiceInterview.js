
 
     



    // setTimeout(() => {
    //     console.log("Step 3 (Async task finished)");  
    // }, 4000);  


// var a = 10;

// function me (){
//     console.log(a);
// }

// console.log(a);


// if (true) {
//     let blockVar = "Inside if block";
//     console.log(blockVar);
//    let blockVar = "hi";


// }

// console.log(blockVar);


// clouser function 
function outerFunction() {
    let outerVar = "I am from outer!";

    function innerFunction() {
        console.log("hi this is new"); // ✅ Can access outerVar even after outerFunction returns
    }

    return innerFunction;
}
 console.log(outerFunction());

const myClosure = outerFunction(); // outerFunction runs and returns innerFunction
myClosure(); // Logs: "I am from outer!"


// for  html code 
<button onclick="document.getElementById('myDialog').showModal();">Open Dialog</button> 