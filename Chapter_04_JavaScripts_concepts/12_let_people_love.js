//let - blocked scope variable
let l = 10;

let retrycount = 0;
retrycount = retrycount + 1;
retrycount = retrycount + 1;

console.log("Retry attempt:" + retrycount);


let retrycount = 5;  //syntax error: Identifier 'retrycount' has already been declared
//syntax error no reduclaration allowed for let variable


let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Execution time block is: " + executionTime);
}

console.log("Execution time outside the block is: " + executionTime); // ReferenceError: executionTime is not defined   

//let == loyal;
// var = variable/traitor
