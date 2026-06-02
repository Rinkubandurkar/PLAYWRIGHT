//Higher order function 
// a function that takes another function as an argument or returns a function as a result is called a higher-order function.

function runWithLoggin(testName, testFn) {
    console.log(`Starting test: ${testName}`);
    let result = testFn();
    console.log(`Result of ${testName}: ${result}`);
}


function LoginTest() {
    return "pass";
}
function LoginTestFailed() {
    return "fail";
}

runWithLoggin("Login Test", LoginTest); // Output: Starting test: Login Test \n Result of Login Test: pass
runWithLoggin("Login Test Failed", LoginTestFailed); // Output: Starting test: Login Test Failed \n Result of Login Test Failed: fail   