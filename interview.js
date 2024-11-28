function sayhi(){
    console.log(name);
    console.log(age);
    var name = "Lydia";
    var age = 21;
}

sayhi();

// result will be undefined undefined

// **

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }
  
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }

//   answer will be 
//   3,3,3 and 0 1 2  due to closure and let , var 
 
// ***
const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter() {
      return 2 * Math.PI * this.radius;
    },
  };
  
  console.log(shape.diameter()); // Output: 20
  console.log(shape.perimeter()); // Output: 62.83185307179586
  