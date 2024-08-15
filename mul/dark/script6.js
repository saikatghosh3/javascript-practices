
promise = new Promise((resolve, reject) => {
    console.log("i am a promise");
    resolve("success!!");
})
Promise2 = new Promise((resolve, reject) => {
    console.log("i am another promise");
    reject("shit man error");
})








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