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