let results = ["pass", "fail", "pass", "error", "fail"];

//indexOf - returns first index , or -1 if not found

results.indexOf("fail");  //1
results.indexOf("skip");  //-1

// lastIndexOf - searches from the end
results.lastIndexOf("fail");    //4

//includes -returns boolean
results.includes("error");   //true
results.includes("skip");   //false


//finf -returns first matching element
let num = [10, 20, 30, 45];
let r = num.find(x => x > 20);  //30 
console.log(r);
//findIndex
num.findIndex(n => n > 20);
num.findLastIndex(n => n > 20);


