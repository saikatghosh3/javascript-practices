// here we'll solve class and object related problems


//  problem 1 :create a class person with name and age properties and method  greet . 
// "hi, I'm name and I'm age years old"

class Person {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(` hi, I'm ${this.name}  and i am ${this.age}  years old`);
    }
}

const p1 = new Person ("saikat", 25);
p1.greet();


// create a  Student class with name, marks, 
// add a method getGrade()
// if marks >= 80 -> A , if marks >= 60 -> B else C


class Student {
    constructor(name, marks){
        this.name = name;
        this.marks = marks; 
    }
    getGrade(){
     if(this.marks >= 80) return "A";
     if(this.marks >= 60) return "B";
     else  "C";

    }
}

const S1 = new Student ("Rahim", 75);
console.log(`${S1.name} got grade: ${S1.getGrade()}`);


// problem 3: create a rectangle calss with width and height ,
//  add a method area () that return area

class rectangle {
    constructor(width , height){
        this.width = width;
        this.height = height;
    }
    area (){
        return this.width * this.height;
    }
}

const box = new rectangle(5, 10);
console.log("Area", box.area());


// problem 4 : Create a class counter with a private field #count
// method increment(), decrement(), getValue() 

class Counter {
   #count = 0;

   increment(){
    this.#count ++;
   }
   decrement (){
    this.#count--;
   }
   getValue (){
    return this.#count;
   }
}
const c = new Counter();
c.increment();
c.increment();
c.decrement()
console.log(c.getValue());

// Create a product class with discount class product(name, price)
// method applyDiscount (percent) and return price after discount 

class Product {
    constructor (name, price){
        this.name = name;
        this.price = price;
    }
    applyDiscount (percent){
        const discountAmount = this.price * (percent /100);
        return this.price - discountAmount;
    }
}

const p2 = new Product ("shirt", 2000);
console.log(p2.applyDiscount(20));

// Inhertance 
// create Employee class with name, salary. create manager class that extends Employee with bonus
// add method totalSalary() in Manager

class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
}
class Manager extends Employee{
    constructor(name, salary, bonus){
        super(name, salary)
        this.bonus = bonus;
    }
    totalSalary (){
        return this.salary + this.bonus;
    }
}

const n  = new Employee("tonoy", 5000);
console.log(`${n.name}'s salary is ${n.salary}Tk`)
const m = new Manager("saikat", 5000, 1000);
console.log(`${m.name}'s total salary: ${m.totalSalary() }Tk`);

// create a book class with properties title, author isAvailable
// methods: borrowBook() - set available to false 
// returnBook() → set available to true

// getStatus() → log if it's available or not

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true; // default: available
  }

  borrowBook() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`You borrowed "${this.title}"`);
    } else {
      console.log(`"${this.title}" is currently not available.`);
    }
  }

  returnBook() {
    this.isAvailable = true;
    console.log(`You returned "${this.title}"`);
  }

  getStatus() {
    console.log(`"${this.title}" is ${this.isAvailable ? "Available" : "Not Available"}`);
  }
}

// Test
const book1 = new Book("Atomic Habits", "James Clear");

book1.getStatus();     // Available
book1.borrowBook();    // You borrowed "Atomic Habits"
book1.getStatus();     // Not Available
book1.returnBook();    // You returned "Atomic Habits"
book1.getStatus();     // Available

// Create a class user with username and password 
// method: login (inputPassword) - ture or false 
// changePasword(oldpass, newpass)  only if old matches 


class User{
    #password;
    constructor (username, password){
        this.username = username;
        this.#password = password // private
    }

    login(inputpassword){
        return this.#password === inputpassword;
    }
    changePassword(oldPass, newPass){
        if(this.#password === oldPass){
            this.#password = newPass;
            console.log("password changed successfully.");
        } else{ 
            console.log("incorrect current password.")
        }
    }
}

// Test 
const u1 = new User ("saikat", "12345");

console.log(u1.login("wrong"));
console.log(u1.login("12345"));
u1.changePassword("wrong", "67890");
u1.changePassword("12345", "67890");
console.log(u1.login("67890")); 

//Inventory system for products 

// class product(name, quantity)
// method addStock(n) removeStock(n)  getStock()


class Product {
    constructor(name, quantity){
        this.name = name;
        this.quantity = quantity
    }
    addStock(n){
        this.quantity +=n;
        console.log(`${n} units added to ${this.name}`);
    }
    removeStock(n){
        if(n> this.quantity){
            console.log(`Not enough stock to remove ${n}`);

        } else{
            this.quantity -= n;
            console.log(`${n} units remove from ${this.name}`)
        }
    }
    getStock(){
        console.log(`current stock of ${this.name}: ${this.quantity}`)
    }
}
const item = new Product("Mouse", 10);

item.getStock();        
item.addStock(5);      
item.removeStock(12);   
item.removeStock(5);    
item.getStock();  

// object related problem:


// Write a function that takes an object and retuns how many keys (properties it has)

function hasKeys(obj){
    return Object.keys(obj).length;
}

const person = {name: "saikat", age: 25, job: "developer"};
console.log(CountProperties(person));

// write a function that checks if a key exists in the object

function hasPoroperty(obj, key){
    return obj.hasOwnProperty(key);
}
const student = { name: "Raju", roll: 12 };
console.log(hasPoroperty(student, "name")); // true
console.log(hasPoroperty(student, "grade")); // false

// write a function that sums all numeric values in a given object. 

function sumValues (obj){
    let sum = 0;
    for (let key in obj){
        if(typeof obj[key] === 'number'){
            sum += obj[key];
        }
    }
    return sum;
}
const marks  = {math: 85, science : 90, name : "Mina"};
console.log(sumValues(marks));

// here obj[key] is the way of accessing (value ) as it is the unknown obj. 

// if we know the obj then the above code will be  which is really basic way. 


const marks1 = { math: 85, science: 90, name: "Tina" };
function sumValues(obj) {
  return obj.math + obj.science; // directly accessing known keys
}


console.log(sumValues(marks1)); // 175


// now write a function to remove a given key from the object and return updated object.

function removeKey (obj, key){
    delete obj[key];
    return obj;
}

const car = { brand: "Toyota", model: "Corolla", year: 2020 };
console.log(removeKey(car, "year")); 


// basic one :  
// To know how many keys are inside Object 
const obj = {
    name: "saikat", 
    age: 25, 
    job: "fontend developer", 
    address: "Dhaka, Bangladesh"
}

console.log(Object.keys(obj)); 
console.log(Object.keys(obj).length); 