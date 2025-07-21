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