let str = " Hello, World! ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.trim());

str.trimStart();
str.trimEnd();

let msg = "Test: Fail. Retry: Fail";
console.log(msg.replace("Fail", "Pass"));
console.log(msg.replaceAll("Fail", "Pass"));
console.log(msg.replace(/FAIL/g, "Pass"));
//Concatenation
"Hello" + " " + "World";
"Hello".concat("", "World");
`${"Hello"} ${"World"}`;
let r = "pass,fail,skip".split("");
console.log(r);

let rr = "test_login_pass".split("_").join("");

console.log(rr);

let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);
