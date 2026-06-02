let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

let number = [3, 1, 4];
number.sort();
console.log(number);

let num = [10, 1, 21, 2];
num.sort();
console.log(num);
//Natural Sorting, Lexical sorting  

num.sort((a, b) => a - b);   // Ascending
console.log(num);
num.sort((a, b) => b - a);   //Descending 
console.log(num);



