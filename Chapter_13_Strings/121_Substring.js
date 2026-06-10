let str = "Login_Test_Pass_001";
//slice(start,end)  end is exclusive
console.log(str.slice(0, 5)); //Login 0 -4
console.log(str.slice(11));

let testNumber = str.slice(-3);
console.log(testNumber);

console.log(str.includes("Pass"));

//sunstring (start,end) - no negative index
console.log(str.substring(6, 10));
