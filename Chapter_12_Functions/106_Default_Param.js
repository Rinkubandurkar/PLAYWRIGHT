function retry(testName, maxRetries, delay) {
    console.log(`Running test: ${testName} up to ${maxRetries} times with a delay of ${delay}`);;

}

retry("Login Test", 3, 1000); // Output: Running test: Login Test up to 3 times with a delay of 1000
retry("Registration Test ");
