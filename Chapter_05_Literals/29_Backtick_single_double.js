// Difference between backtick (`), single ('), and double (") quotes in JS

// Single and double quotes are identical — no difference
const single = 'Hello, ${name}!'; // prints literally: Hello, ${name}!
const double = "Hello, ${name}!"; // prints literally: Hello, ${name}!

// Backticks (template literals) support interpolation and multiline
const name = "World";
const backtick = `Hello, ${name}!`;  // prints: Hello, World!
const multiline = `Line 1
Line 2
Line 3`; // actual newlines preserved

console.log(single);   // Hello, ${name}!
console.log(double);   // Hello, ${name}!
console.log(backtick); // Hello, World!
console.log(multiline);

