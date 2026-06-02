// Slicing &Combinig

let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 3));  // start , end-1


console.log(arr.slice(2, 4));
console.log(arr.slice(2, 5));
console.log(arr.slice(2));


//start from the -1 and till -2
let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(-2));

console.log(arr.slice(0));


let arr = [10, 20, 30, 40, 50];
let remove = arr.splice(1, 2);
console.log(remove);
console.log(arr);