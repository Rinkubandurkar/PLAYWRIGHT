//Return a value 

function getStatus(code) {
    if (code >= 200 && code < 300) return "Success";
    if (code >= 400 && code < 500) return "Client Error";
    if (code >= 500) return "Server Error";
}
getStatus(200); // Output: Success
getStatus(404); // Output: Client Error     
getStatus(500); // Output: Server Error
//..........................

function logTest(name) {
    console.log(`Running: ${name}`);
}
let result = logTest("Login Test");
console.log(result); // Output: undefined

// ............................

greet("Alice");

function greet(name) {
    console.log(`Hello, ${name}!`);
}

//...........
sayHi("Bob");

const sayHi = function (name) {
    console.log(`Hi, ${name}!`);
}; // Output: Uncaught ReferenceError: Cannot access 'sayHi' before initialization      