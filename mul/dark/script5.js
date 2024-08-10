class Person {
    constructor(){
        this.species = "homo sapiens";
        console.log("enter parent consturtor");
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class Engineer extends Person{
 constructor(branch){
    console.log("enter child consturctor")
    super()// to invoke parent class construtor
    this.branch = branch;
    console.log("exit child constructor")
 }

    work(){
        console.log("solve problems, build website");
    }
}
//  class Doctor extends Person{
//     duty() {
//         console.log("treat patient")
//     }
//  }
let engObj = new Engineer("Chemical Engineering");

// in this way it is inheritng the property of parent 