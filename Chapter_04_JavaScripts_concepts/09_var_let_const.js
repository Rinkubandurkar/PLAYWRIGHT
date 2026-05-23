var v = 10;
let l = 30;
const c = 3.14;

var browser = "chrome";
var browser = "firefox";   // reduclaration  allowed
browser = "edge";   // reassignment allowed

console.log(v); // 10

//for function

var testCases = ["login", "signup", "logout"];

for (var i = 0; i < testCases.length; i++) {
    console.log(testCases[i]); // login, signup, logout
}
console.log("Loop counter leaked oustide the loop: " + i); // Loop counter leaked outside the loop: 3

function say() {
    console.log("Hello"); // Hello

}

say();
say();
