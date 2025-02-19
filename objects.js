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

for (let key in abg) {
    console.log(`${key}: ${abg[key]}`);
}

console.log("--------------------------------");

console.log(Object.keys(abg));   // ["name", "age"]
console.log(Object.values(abg)); // ["Alice", 25]
console.log(Object.entries(abg)); // [["name", "Alice"], ["age", 25]]