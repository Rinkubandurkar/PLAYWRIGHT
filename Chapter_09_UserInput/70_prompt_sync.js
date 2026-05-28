const prompt = require("prompt-sync")();

let num = prompt("Please enter a number:");
num = parseFloat(num); // Convert the string to a number    
if (num % 2 === 0) {
    console.log(num + " is an even number");
} else {
    console.log(num + " is an odd number");
}
