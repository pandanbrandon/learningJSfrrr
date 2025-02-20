// DOM Manipulation

// DOM (Document Object Model) is the tree structure. 
// Represents the HTML page

// This is how you use js to read, modify, and interact with web pages dynamically

// keyword: DYNAMICALLY (oh yea)



// selecting elements

let title = document.getElementById("title");

console.log(title); // outputs html, <h1 id="title">Hello fine shyts.</h1>


// modify elements
// with "textContent" property

title.textContent = ("Saluatations fine shyt");

// innerHTML
title.innerHTML = "<i>Saluatations fine shyt</i>"; // Changes text and renders HTML


// ----- Changing Styles -----

title.style.color = "pink"; // Changes text color to blue
title.style.fontSize = "30px"; // Changes font size to 30px


