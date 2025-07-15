// key opp concepts in javascript
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