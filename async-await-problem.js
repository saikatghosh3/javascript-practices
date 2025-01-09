// before discussaning async await we should learn some settimeout and setintervel problems and solutions
// write a function reapeatMessage that logs a message every 2 seconds unign setInterval.

// function reapeatMessage(){
//     setInterval (()=>{
//     console.log("This message repreats every 2 seconds");
    
//     },2000);
// }
// reapeatMessage();


// Problem: Write a function startRepeating that uses setInterval to log a message every 2 seconds. 
// The message should stop after 10 seconds using clearInterval.

// function startInterval (){
//     const IntervalId = setInterval(()=>{
//         console.log("This message is repeated every 2 seconds");
        
//     },2000);
    
//     setTimeout(()=>{
//         clearInterval(IntervalId);
//         console.log("stopped repeating after 10 seconds")
//     }, 10000);
    
// }

// startInterval();


//Problem: Create a countdown timer that starts from 10 and decrements every 1 second until it reaches 0.
//  When the countdown reaches 0, display "Time's up!" and stop the interval.
//  function countdownTimer (){
//     let timeLeft = 10;
//     const intervalId = setInterval(()=>{
//         console.log("timeLeft");
//         timeLeft --;
//         if(timeLeft< 0){
//             clearInterval(intervalId);
//             console.log("Times UP!");
            
//         }
        
//     },1000)
//  }

//  countdownTimer();



// Write a function logDateEverySecond that logs the current date and time every 
// second using setInterval. and stops automatically using settimeout.

// function logDateEverySecond(){
//     const intervalId = setInterval(()=>{
//         const currentDate = new Date ();
//         console.log(currentDate);
        
//     },1000)

//     setTimeout (()=>{
//         clearInterval(intervalId);
//         console.log("sotp logging date");
        
//     }, 10000);
// }

// logDateEverySecond();


//Problem: Write an async function fetchData that fetches user data from a placeholder API (https://jsonplaceholder.typicode.com/users).
//  Return the data in JSON format.

async function fetchData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    }catch (error){
        console.log("Error fatching data:" , error);
        
    }
    
}

fetchData().then(data => console.log(data));