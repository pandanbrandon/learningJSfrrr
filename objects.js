// Objects

// Lets make an ABG Object

let abg = {
    name: "Chaewon",
    age: 24,
    occupation: "singer",
    greeting: function(){
        return "Hi, i'm " + this.name;
    } 
};

console.log("this abg's name is: " + abg.name);
console.log("Greeting: " + abg.greeting());

console.log("--------------------------------");

// interating through objects
// with "for ... in"

for (let key in abg) {
    console.log(`${key}: ${abg[key]}`);
}

console.log("--------------------------------");

// Using Object keys, values, entries

console.log(Object.keys(abg));   // all keys
console.log(Object.values(abg)); // all values
console.log(Object.entries(abg)); // all entries, keys and values

console.log("--------------------------------");

// Object destructuring
// Destructuring makes it easy to extract values from objects

let {name, age} = abg;

console.log("name: " + name);
console.log("age: " + age);

console.log("--------------------------------");

// Object Spread and Rest Operators
// these operators make working with objects easier

let fruits = ["apple", "orange", "pear", "watermelon"];
let extraFruits = ["tomatooo", ...fruits];

console.log(extraFruits);

console.log("--------------------------------");

// classes and constructors

// constructor 

function Car(year, make, model){
    this.year = year;
    this.make = make;
    this.model = model;
}

let gregsCar = new Car(2014, "kia", "Soul");

console.log(gregsCar.model);


// classes
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    
    makeSound() {
        return `${this.name} says ${this.sound}`;
    }
}

let dog = new Animal("Dog", "Woof");

console.log(dog.makeSound()); // "Dog says Woof"





