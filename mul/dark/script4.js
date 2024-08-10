
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
let n = prompt("Enter your number : ");
let arr = []; // we will store the value in empty array

for(let i=1; i<=n; i++){
    arr[i-1] = i; //1(0) mane 1 , 0 index a save hobe 

}
console.log(arr);

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


let Data = "secret information";


class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data =",Data);
    }
}
class Admin extends User{
    constructor(name, email){
        super(name,email);

    }
    editData(){
        Data = "some new value";
    }
}

let student1= new User("saikat", "saikat@gmail.com");
let student2= new User("tonoy", "tonoy@gmail.com");
let teacher1 = new User("dean", "dean@gmail.com");
let Admin1 = new Admin("admin", "admin@gmail.com")
// in the console you can write sutdent1  and student1.viewdata(); it will show information.