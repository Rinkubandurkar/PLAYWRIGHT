let firstname = "Prrammod";
let fullname = `Hi ${firstname} Dutta`;
console.log(fullname);

const env = "stagging";
const userId = 12345;
const url = `https://api.example.com/${env}/users/${userId}`;
console.log(url);

// Logs 
const testName = "Login Test";
const status = "passed";
const duration = 1200; // in milliseconds
console.log(`Test "${testName}" ${status} in ${duration}ms`);