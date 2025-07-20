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


