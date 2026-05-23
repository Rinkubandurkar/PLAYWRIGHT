// ---------------------------
// All Number Types in JavaScript
// ---------------------------

// ------ Integer ------
console.log(42);           // 42

// ------ Floating Point ------
console.log(3.14);         // 3.14

// ------ Scientific (Exponential) Notation ------
console.log(1e3);          // 1000
console.log(1.5e-2);       // 0.015

// ------ Binary (0b/0B) ------
console.log(0b1010);       // 10
console.log(0B1111);       // 15

// ------ Octal (0o/0O) ------
console.log(0o77);         // 63
console.log(0O10);         // 8

// ------ Hexadecimal (0x/0X) ------
console.log(0xFF);         // 255
console.log(0x1A);         // 26

// ------ BigInt (n suffix) ------
console.log(9007199254740991n);   // 9007199254740991n
console.log(0x1FFFFFFFFFFFFFn);   // 9007199254740991n

// ------ Special Number Values ------
console.log(Infinity);           // Infinity
console.log(-Infinity);          // -Infinity
console.log(NaN);                // NaN

// ------ Number with underscores (numeric separators, ES2021) ------
console.log(1_000_000);          // 1000000
console.log(0xFF_FF);            // 65535

// ------ Number() constructor / Number methods produce these too ------
console.log(Number.MAX_VALUE);         // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);         // 5e-324
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991
console.log(Number.EPSILON);           // 2.220446049250313e-16
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN);               // NaN

// ------ typeof ------
console.log(typeof 42);       // "number"
console.log(typeof 42n);      // "bigint"
console.log(typeof NaN);      // "number" (quirky: NaN is still type number)
console.log(typeof Infinity); // "number"
