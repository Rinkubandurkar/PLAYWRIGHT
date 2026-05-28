//Iterate - Go from ont to another

let tests = ["login", "checkout", "serach"];


for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}
console.log("....");

//for ...of (cleanest for values)
for (test of tests) {
    console.log(test);
}

console.log("....");

tests.forEach((test, index) => {
    console.log(test, index);

})


for (let student in students) {
    console.log(student, "->", students[student]);  //index=in
}