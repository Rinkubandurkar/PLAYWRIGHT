let username = "Dev";
let password = "secure123";
let isAccountLocked = true;

if (username === "Dev" && password === "secure123") {
    if (!isAccountLocked) {
        console.log("Login successful!");
    } else {
        console.log("Account is locked.");
    }
} else {
    console.log("Invalid username or password.");
}