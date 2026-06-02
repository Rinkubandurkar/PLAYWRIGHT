function makeRetryTracker(max) {
    let attempts = 0;
    function tryAgain(testName) {
        attempts++;
        if (attempts <= max) {
            console.log(`Attempt ${attempts} for test: ${testName}`);
        }
        return `Attempt ${attempts} for test: ${testName}`;
    }
    return tryAgain;
}

let retry = makeRetryTracker(3);
console.log(retry("Login Test")); // Output: Attempt 1 for test: Login Test
console.log(retry("Login Test"));
console.log(retry("Login Test")); // Output: Attempt 3 for test: Login Test
console.log(retry("Login Test")); // Output: Attempt 4 for test: Login Test (exceeds max)
