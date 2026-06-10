let str = "Hello, World!";

// Length property
console.log(str.length); // 13

// Accessing characters by index
console.log(str[0]);      // H
console.log(str[str.length - 1]); // !

// Index of substring
console.log(str.indexOf("World")); // 7
console.log(str.indexOf("o"));     // 4
console.log(str.lastIndexOf("o")); // 8

// Extracting substrings
console.log(str.slice(0, 5));     // Hello
console.log(str.substring(7, 12)); // World
console.log(str.substr(7, 5));    // World

// Case conversion
console.log(str.toUpperCase()); // HELLO, WORLD!
console.log(str.toLowerCase()); // hello, world!

// Check start/end
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!"));       // true

// Includes
console.log(str.includes("World")); // true

// Replace
console.log(str.replace("World", "Playwright")); // Hello, Playwright!

// Trim whitespace
let spaced = "  Hi  ";
console.log(spaced.trim()); // Hi

// Split
console.log(str.split(", ")); // ["Hello", "World!"]

// Repeat
console.log("Ha".repeat(3)); // HaHaHa

// Char at and char code
console.log(str.charAt(0));    // H
console.log(str.charCodeAt(0)); // 72

// Template literals
let name = "Alice";
console.log(`Hello, ${name}!`); // Hello, Alice!
