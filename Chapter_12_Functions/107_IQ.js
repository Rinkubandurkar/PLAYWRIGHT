function runTest(name, status, duration) {
    return `${name}:${status}:${duration}ms`;
}

const r = runTest("Login Test", "Passed", 1200);
console.log(r); // Output: Login Test:Passed:1200ms