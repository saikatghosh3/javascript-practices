// question 1:
// Write a function that takes an array of numbers and returns a new array with each number doubled.
 function doubleNumbers(arr){
        return arr.map((num => num * 2));
 }

 const numbers = [1,2,3,4,5];
    console.log(doubleNumbers(numbers));

    // question 2:
    // You have an array of objects where each object represents a person with a name property.
    //  Write a function to return an array of names.

    function namesOnly(arr){
        return arr.map(person => person.name)
    }

    const people = [
        {name: "John", age: 20},
        {name: "Smith", age: 30},
        {name: "Doe", age: 40}
    ]

    console.log(namesOnly(people));