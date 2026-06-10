//   ==  vs  ===  (Confusing Cases)

// == (abstract equality) allows type coercion
// === (strict equality) checks value + type, no coercion

console.log("-----  ==  vs  ===  -----");

// 1. Number vs String
console.log(5 == "5");   // true  (string "5" coerced to number 5)
console.log(5 === "5");  // false (number vs string)

// 2. Empty values
console.log(0 == false);   // true  (false coerces to 0)
console.log(0 === false);  // false
console.log("" == false);  // true  (both coerce to 0)
console.log("" === false); // false

// 3. null vs undefined
console.log(null == undefined);  // true  (special rule: they are equal with ==)
console.log(null === undefined); // false (different types)

// 4. null and 0
console.log(null == 0);  // false (null only equals undefined with ==)
console.log(null === 0); // false

// 5. String vs Boolean
console.log("1" == true);   // true (true -> 1, "1" -> 1)
console.log("1" === true);  // false
console.log("0" == false);  // true
console.log("0" === false); // false

// 6. Array comparisons
console.log([] == false);    // true  ([] -> "" -> 0, false -> 0)
console.log([] === false);   // false
console.log([] == 0);        // true
console.log([] === 0);       // false
console.log([1] == 1);       // true  ([1] -> "1" -> 1)
console.log([1] === 1);      // false

// 7. Objects vs primitives
console.log({} == "[object Object]"); // true (object toString)
console.log({} === "[object Object]");// false

// 8. NaN
console.log(NaN == NaN);  // false (NaN is never equal to anything including itself)
console.log(NaN === NaN); // false

// 9. typeof checks (always safe with ===)
console.log(typeof null);           // "object"
console.log(typeof undefined);      // "undefined"
console.log(typeof 42);             // "number"
console.log(typeof "hello");        // "string"
console.log(typeof true);           // "boolean"

// 10. Common pitfall in conditionals
let val = "0";
if (val == false) {
  console.log('val == false is true');  // runs (coercion)
}
if (val === false) {
  console.log('val === false is true'); // never runs
}

// Best practice: always use === unless you explicitly need coercion
