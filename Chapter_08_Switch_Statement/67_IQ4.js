let value = "5";
console.log(typeof value);
switch (value) {
    case 5:
        console.log("This is a number 5");
        break;
    case "5":
        console.log("This is a string 5");
        break;
    default:
        console.log("Unknown value");
}


let stauts = 0;
console.log(typeof stauts);
switch (stauts) {
    case false:
        console.log("This is false matched");
        break;
    case 0:
        console.log("This is 0 matched");
}