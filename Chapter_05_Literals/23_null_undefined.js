// ---------------------------
// null vs undefined in JavaScript
// ---------------------------

// undefined: variable declared but not assigned a value
let a;
console.log(a); // undefined

// null: explicitly assigned "no value"
let b = null;
console.log(b); // null

// typeof
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (historical JS bug)

// Loose equality (==) says they are equal
console.log(null == undefined);  // true

// Strict equality (===) says they are NOT equal
console.log(null === undefined); // false

// numeric coercion
console.log(Number(undefined)); // NaN
console.log(Number(null));      // 0

console.log(1 + undefined); // NaN
console.log(1 + null);      // 1

// object lookup: missing property gives undefined
const obj = { name: "Alice" };
console.log(obj.age); // undefined

// intentionally empty value: use null
obj.age = null;
console.log(obj.age); // null

// function with no return statement
function foo() {}
console.log(foo()); // undefined

// function parameter not provided
function bar(x) { return x; }
console.log(bar()); // undefined

// JSON serialization
console.log(JSON.stringify({ a: undefined, b: null }));
// {"b":null} -- undefined keys are omitted

// default parameter: only undefined triggers default
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
console.log(greet(undefined)); // Hello, Guest
console.log(greet(null));      // Hello, null  (null does NOT trigger default)

// optional chaining
const user = { profile: null };
console.log(user?.profile?.name); // undefined (nullish, short-circuits)

// nullish coalescing (??) — only null/undefined fallback
const val1 = null;
const val2 = undefined;
const val3 = false;
console.log(val1 ?? "fallback"); // "fallback"
console.log(val2 ?? "fallback"); // "fallback"
console.log(val3 ?? "fallback"); // false (not nullish)
