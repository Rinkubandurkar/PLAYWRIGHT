//Arrow Function (ES6)

const greet = function (name1) {
    return "Hi" + name1;
}
let r = greet("Pramod");
console.log(r);

const greet2 = (name1) => "Hi" + name1;
let r2 = greet2("Pramod");
console.log(r2);
// ................

const doubleIt = n => n * 2;
console.log(doubleIt(10));

const printIt = name => console.log(name);
console.log(printIt("Dutta"));


function add(a, b) {
    return a + b;
}
const add2 = (a, b) => a + b;

function say() {
    console.log("Hello");
}
const say1 = () => console.log("Hi");
const say2 = () => `Hi`;


const greet = name => {
    const message = "HI" + name;
    return message;
}