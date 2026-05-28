const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); rl.question('Please enter a number: ', (answer) => {
  const num = parseFloat(answer); // Convert the input to a number 
  if (isNaN(num)) {
    console.log("Invalid input! Please enter a valid number.");
  } else if (num % 2 === 0) {

    console.log(num + " is an even number");
  } else {
    console.log(num + " is an odd number");
  }
  rl.close();

}); 