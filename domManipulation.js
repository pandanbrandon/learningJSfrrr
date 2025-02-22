// DOM Manipulation

// DOM (Document Object Model) is the tree structure. 
// Represents the HTML page

// This is how you use js to read, modify, and interact with web pages dynamically

// keyword: DYNAMICALLY (oh yea)



// selecting elements

let title = document.getElementById("title");

console.log(title); // outputs html, <h1 id="title">Hello fine shyts.</h1>
console.log("hello there, inspect element am i right?");

// modify elements
// with "textContent" property

title.textContent = ("Saluatations fine shyt");

// innerHTML
title.innerHTML = "<i>Saluatations fine shyt</i>"; // Changes text and renders HTML


// ----- Changing Styles -----

title.style.color = "pink"; // Changes text color to blue
title.style.fontSize = "100px"; // Changes font size to 30px

// Got an idea for the button **ignore**
let button = document.getElementById("btn");

button.addEventListener("click", function() {
    let sound = new Audio("rizz-sounds.mp3"); // Load the sound file
    sound.play(); // Play the sound
});

// center the title and button
const myDiv = document.querySelector(".mainDiv");

myDiv.style.position = "absolute";
myDiv.style.top = "50%";
myDiv.style.left = "50%";
myDiv.style.transform = "translate(-50%, -50%)";

document.getElementById("title").style.fontSize = `${Math.min(Math.max(window.innerWidth / 20, 30), 100)}px`;










