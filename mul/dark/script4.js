
// create a function using function keyword that takes a string as an argument & returns the number of vowels in the string.
// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if
//         (char ==="a" ||
//         (char ==="e") ||
//         (char ==="i") ||
//         (char ==="o") ||
//         (char ==="u") 
//     ){
//         count++;
//     }
//     }
//     return count;
// }

// create an arrow function to perform the same task 

// const countVow = (str) =>{
//     let count = 0;
//     for(const char of str){
//         if
//         (char ==="a" ||
//         (char ==="e") ||
//         (char ==="i") ||
//         (char ==="o") ||
//         (char ==="u") 
//     ){
//         count++;
//     }
//     }
//     return count;
// }
// Q: for a given array of numbers print the surare of each value using the for Each loop. 

// let num = [1,2,3,4,5,65];
// num.forEach((num) =>{
//     console.log(num * num); // num**2
// });

// use map method for the same code
// let nums = [1,3,5,6,7,];
//  let square =nums.map((val) =>{
//     return(val *2);

// });
// console.log(square);

// return all even numbers with filter method 
//  let arr =  [ 12,2,3,56,7,8,9];
//  let newArr = arr.filter((val) =>{
//     return val % 2 === 0;
//  });
//  console.log(newArr);

// let arr = [13,3,4,56,7];
// const output = arr.reduce((res,curr) =>{
//     return res + curr;
// });

// console.log(output);
// filter out the marks of students that scored 90+
// let marks = [ 47,90,91,97,55,66,98];
//  let toppers = marks.filter((val) =>{
//     return val > 90;
//  });
//  console.log(toppers);
// Take a number n as input from the user.Create an array of numbers from 1 to n;
// use the reduce method to calculate sum of all numbers in the Array.
// use teh reduce method to calculate the product of all numbers in the Array 
// let n = prompt("Enter your number : ");
// let arr = []; // we will store the value in empty array

// for(let i=1; i<=n; i++){
//     arr[i-1] = i; //1(0) mane 1 , 0 index a save hobe 

// }
// console.log(arr);

// calculating sum 
// let sum = arr.reduce((res, curr) => {
//     return res + curr;
// });
// console.log(sum);

// // product of 3  meaning 1*2*3 in a short form factorial

// let factorial = arr. reduce((res,curr)=>{
//     return res *curr;
// });
// console.log("factorial = ", factorial);

//Qs:you are creating a website for your bollege. Create a class User with 2 properties, and & email. it also has a method called vewData()that allows user to vies website data.
// Create a new class called Admin which inherits form User. Add a new method called editData to Admin that allows it to edit website data. 
// slove two question together


// let Data = "secret information";


// class User {
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log("data =",Data);
//     }
// }
// class Admin extends User{
//     constructor(name, email){
//         super(name,email);

//     }
//     editData(){
//         Data = "some new value";
//     }
// }

// let student1= new User("saikat", "saikat@gmail.com");
// let student2= new User("tonoy", "tonoy@gmail.com");
// let teacher1 = new User("dean", "dean@gmail.com");
// let Admin1 = new Admin("admin", "admin@gmail.com")
// in the console you can write sutdent1  and student1.viewdata(); it will show information.
//For the given array with marks of students [85,97,44,37,76,60]  find the avarage marks of the entire class
// let marks = [85,97,44,37,76,60];

// let sum = 0;
// for( let val of marks){
//    sum +=val;
// }
// let avg = sum / marks.length;
// console.log(`total marks of the entire class is= ${avg}`);

// For a given array with prices of 5 items [250,645,300,900,50]   all items have an offer of 10% off on them. Change the array to store final price after applying offer.
// let items = [ 250,645,300,900,50];

// for(let i = 0; i<items.length; i++) {
//     let offer = items[i] /10;
//     items[i] -= offer;
// }
// console.log(items);

//loops porblems
// calculate the sum of 1 to 5
// let sum = 0;
// let n = 7;

// for(i=0; i<=n;i++){
// sum = sum + i;
// } 
// console.log("sum", sum);
//Print all the even number between 100;
// for(let num = 0; num <= 100; num++){
//     if(num % 2 == 0){
//         console.log("num =", num);
//     }
// }
// Qs Create a game where start with any random game number. Ask the user guessing the game number untill the user enters correct value.
// let number = 40;
// let UserNum = prompt("Guess the number :");
// while(UserNum != number){
//     prompt("you've entered the wrong number Guess again :");
// }
// console.log("congratulation, you've entered the right number");

// Get user to input a number using prompt("Enter a number") Check if the number is a multiple of 5 or not.
// let num = prompt("Enter a number");
// if ( num %5 == 0){
//     console.log("It is multiple of 5")
// }else{
//     console.log("It is not the multiple of 5")
// }

//Write a code which can give grades to student according to their scores:
// 90-100:A
// 70-89:B
// 60-69:C
// 50-59:D
// 0-49: E
let num = 67;
if(num >=90 && num <=100){
 console.log("You have got A grade");
}else if(num >=70 && num <=89){
    console.log("you have got B grade");
}else if(num >=60 && num <=69){
    console.log("you have got C grade");
}else if(num >=50 && num <=59){
    console.log("you have got D grade");
}else if(num >=0 && num <=49){
    console.log("you have failed");
}