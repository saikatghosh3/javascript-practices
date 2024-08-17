
// promise = new Promise((resolve, reject) => {
//     console.log("i am a promise");
//     resolve("success!!");
// })
// Promise2 = new Promise((resolve, reject) => {
//     console.log("i am another promise");
//     reject("shit man error");
// })


// new example:
// const getPromise = () =>{
//  return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     reject("error");
// });
// };

// in the case of error it will  be never executed 

// here two parameters are available one is res for fulfilled  and another is err for reject
// let promise = getPromise();
// promise.then((res)=> {
//     console.log("promise fulfilled", res);
// })

// promise.catch((err)=>{
//     console.log("rejected",err);
// })
// in the err we will get, what we have passed in reject msg


// function getData (dataId, getNextData){
//     setTimeout(()=>{
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// };

// getData(1, ()=>{
//     getData(2, ()=>{
//         getData(3);
//     })
// })


// concept of promise chain:
// function asyncFunc1(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },4000)
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         },4000)
//     });
// }
// console.log("fatching data1.....");
// let p1 = asyncFunc1();
// p1.then((res) =>{
//     console.log("fatching data2....");
//     let p2 = asyncFunc2();
//     p2.then((res)=>{

//     });
    

// });

// another way of writing promise with short form
// function getData(dataId){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success!!");
//         },3000);
//     });
// }

// promise cahin
// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then(()=>{
//         console.log(res);
//     })
// });
// another way of above example
// getData(1)
// .then((res)=>{
//     return getData(2);
// })
// .then((res)=>{
//     return getData(3);
// })
// .then((res)=>{  
//     console.log("success!!");
// })

// the async-await function
// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//              console.log("weather data");
//              resolve(200);

//         },2000);
//     });
// }
// async function getWeatherData(){
//     await api();//1st
//     await api();//2nd
// }
// or with the help of iief function
// (async ()=>{
//     await api();
//     await api();
// })();
// in this way we don't need to call the function it will immediately execuate

let a = 5;
console.log(a++);
console.log(a);
console.log(++a);