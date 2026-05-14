// Difference between null and undefined in JavaScript

// undefined: variable declared but not assigned a value
let a;
console.log(a); // undefined
console.log(typeof a); // "undefined"

// null: explicitly assigned "nothing" value
let b = null;
console.log(b); // null
console.log(typeof b); // "object" (this is a known JS bug)

// Key differences:

// 1. Default vs intentional
let x;         // JS sets this to undefined automatically
let y = null;  // programmer sets this to null intentionally

// 2. Checking equality
console.log(null == undefined);  // true  (loose equality)
console.log(null === undefined); // false (strict equality - different types)

// 3. typeof
console.log(typeof undefined); // "undefined"
console.log(typeof null);     // "object" (historical quirk)

// 4. Common use cases
// undefined -> variable not yet initialized
// null -> explicitly empty/absent value

function greet(name) {
  // if name is undefined (not passed), default to "Guest"
  if (name === undefined) {
    name = "Guest";
  }
  // if name is null (intentionally empty), still show "Guest"
  if (name === null) {
    name = "Guest";
  }
  console.log("Hello, " + name);
}

greet();       // Hello, Guest (name is undefined)
greet(null);   // Hello, Guest (name is null)
greet("John"); // Hello, John
