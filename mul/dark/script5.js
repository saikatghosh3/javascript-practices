class Person {
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class Engineer extends Person{
    work(){
        console.log("solve problems, build website");
    }
}

let saikatObj = new Engineer();

// in this way it is inheritng the property of parent 