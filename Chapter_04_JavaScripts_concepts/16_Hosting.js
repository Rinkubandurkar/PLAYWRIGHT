console.log(greeting);
var greeting = "Hello The testing academy";

// JS engine
// line by line, JIT compilation
var greeting; // hosting with undefined
console.log(greeting);   //undefined
var greeting = "Hello The testing academy";  // assignment stays in place 
console.log(greeting);  // hello