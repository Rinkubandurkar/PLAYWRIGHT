//Scope in function

let env = "stagging";

function setUpConfig() {
    let timeout = 5000;
    console.log(env);
    console.log(timeout);
}
setUpConfig();
console.log(env);
console.log(timeout); // ReferenceError: timeout is not defined

