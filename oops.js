// key oop concepts in javascript
// revision 

// class and objects 


class Person  {
    constructor (name, age){
       this.name = name;
       this.age =age;
    }

 greet (){
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
 }

}
const person1 = new Person("Saikat", 25);
person1.greet();





// inhertance  
// owns the property of parent class 

class Student extends Person{
    constructor(name, age, grade){
    super(name, age);  // it will call the parent constructor

    this.grade = grade;
}
   study(){
    console.log(`${this.name} is studying in grade ${this.grade}`);
   }


}

const student1 = new Student("Saikat", 25, 10)
student1.greet();
student1.study();


// polymorphisom ( method overriding)

class Animal {
    speak(){
        console.log("Animal makes sound ")
    }
}

class Dog extends Animal {
    speak(){
        console.log("Dogs barks");
    }
}

const pet = new Dog();
pet.speak();

//Encapsulation 
// keep some data inside the Object
// we can access or change that data using method 
//so outside code cant mess with direcltly 


class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showInfo(){
        console.log(`Name: ${this.name}. Age: ${this.age}`);
    }
    changeAge(newAge){
        if(newAge >0 && newAge < 120){
            this.age = newAge;
        }else {
            console.log("invalid age!");
        }
    }
}

const person2 = new Person("saikat", 25);
person2.showInfo();
person2.changeAge(30); // changing age using method. 
person2.showInfo();
person2.changeAge(35);
person2.showInfo()

// another simple example 

class Person {
    #secret = "This is private";

    showSecret(){
        console.log(this.#secret); // can access inside the class
    }
       
}

const  p = new Person();
p.showSecret();
console.log(p.#secret); // this line is not possible due to private


// encapsulation and abstructions are almost similar.

	// Encapsulation	       Abstraction
	// Hiding dat             Hiding complexity / details

    // abstruction example

    class TeaMaker {
      makeTea() {
    this.#boilWater();
    this.#addIngredients();
    this.#finalBoil();
    this.#serve();
  }

  #boilWater(){
    console.log("Boiling water...")
  }
   #addIngredients() {
    console.log("Adding tea leaves, sugar, and milk...");
  }

  #finalBoil() {
    console.log("Boiling everything together...");
  }

  #serve() {
    console.log("Straining and serving the tea!");
  }
    }



    const myTea = new TeaMaker();
    myTea.makeTea();

    myTea.#boilWater();  // this one will give error. because of abstruction , it is private and can't change or access it


    // Employee management system (Inheritance and encapsulation)


    class Employee {
        constructor(name, salary){
            this.name = name;
            this._salary;
        }
        getSalary(){
            return this._salary;
        }
    }

    class Manager extends Employee{
        constructor(name, salary, bonus){
            super(name, salary)
            this.bonus = bonus;
        }
        getSalary(){
            return this._salary + this.bonus;
        }
    }

    const emp1 = new Employee("John", 3000);
const mgr1 = new Manager("Saikat", 5000, 1000);

console.log(emp1.getSalary()); 
console.log(mgr1.getSalary());