

// console.log("one"); 
// console.log("two"); 

// setTimeout(()=>{
//     console.log("three");
// },4000);

// console.log("four");
// console.log("five");


// nesting with if else

// let age = 20;
// if(age>=19){
//     if(age>= 60){
//         console.log("senior")
    
// }else{
// console.log("middle");
// }
// }else{
//     console.log("child");
// }

// Nesting with loop
// for(i =0; i<5;i++){
//     let str = "";
//     for (j=0;j<5;j++){
//         str = str + j;
//     }
//     console.log(i, str);
// }

// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }


// call back hell
// getData(1,()=>{
//     console.log("getting data2.....");
//     getData(2,()=>{
//         console.log("getting data 3......");
//         getData(3,()=>{
//             console.log("getting dara4....");
//           getData(4);
//         })
//     })
// })
// to solve this callback hell program the promise is introduce

// let promise = new Promise((resolve, reject)=>{
//     console.log("I am a promise");
//     resolve("success");
// });

// inside the function we will work with the promise 
// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             // console.log("data", dataId);
//             // resolve("success");
//             reject("error");
        
//             if(getNextData){
//                 getNextData();
//             }
//         }, 4000);
//     });
// }


// promise with .then method

// const getPromise = ()=>{
//     return new Promise((resolve, reject)=>{
//         console.log("I am a promise");

//     });
// };

// let promise = getPromise();
// promise.then(()=>{
//     console.log("promise fulfilled");
// });

// we can pass two parameter res= result and err
// const getPromise =()=>{
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success");
//     });
// };


// let promise = getPromise();
// promise.then((res)=>{
//     // Here res is this kind of message that we passed during resove or reject 
//     console.log("promise fulfilled", res);

// });

// promise.catch((err)=>{
//  console.log("rejected", err);
// });

// now imagine a condition wehre data is coming form two or more api and it is coming at the same time. If we handle them seperately then both data
// will come together.

// function asyncFunc1(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log(" data 1");
//             resolve("success");
//         },4000);
//     });
// }

// console.log("fetching data1....");
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
// });

// function asyncFunc2(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log(" data 2");
//             resolve("success");
//         },4000);
//     });
// }

// console.log("fetching data2....");
// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// });

// now we will do promise chaining.



function asyncFunc1(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log(" data 1");
            resolve("success");
        },4000);
    });
}


function asyncFunc2(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log(" data 2");
            resolve("success");
        },4000);
    });
}

// console.log("fetching data1....");
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log("fetching data2...");
//     let p2 = asyncFunc2();
//     p2.then((res)=>{

//     });
// });
// IN the above code we dont need to create p1 and p2 we can direct .then 

// console.log("fetching data1.....");
// asyncFunc1().then((res)=>{
//     console.log("fetching data2...");
//     asyncFunc2().then((res)=>{

//     });
// });

//Another example of promise chaining
// function getData(dataId){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("success");

//         },3000);
//     });
// }
// promise chain
// console.log("getting data1....");
// getData(1).then((res)=>{
//     console.log("getting data2....");
//     return getData(2);
// })
// .then((res)=>{
//     console.log("getting data3.....")
//     return getData(3);
// }).then((res)=>{
//     console.log("Success");
// });


// Now we will do the same thing with the help of async await 

// Async function always return a promise
// Await pauses the execution of its surruonding async functions untill the promise setelled 

// Basic  Example
// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//         },3000);
//     });
// }
// async function getWeatherData(){
//     await api();
// }


// now we will try to maintain these below code with the help of async and await 
// function getData(dataId){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("success");

//         },3000);
//     });
// }
// async function getAllData(){
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
//     console.log("getting data4...");
//     await getData(4);
// }

// fetching api method


const URL = "https://cat-fact.heorkuapp.com/facts";

const getFacts = async ()=>{
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response.status);
}