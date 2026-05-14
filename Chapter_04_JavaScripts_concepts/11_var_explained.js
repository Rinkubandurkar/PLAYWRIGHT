var a = 10;
// var is actually a funtion scoped

console.log(a); // 10  // global scope

function printHello() {
    console.log("Hello The testing academy");
    var a = 20;    // local scope
    console.log(a); // 20
    if (true) {
        var a = 30;
        console.log(a); // 30
    }
}

printHello(); // Hello The testing 


//var ==trump , flipper, dual faced , no trustworthy
