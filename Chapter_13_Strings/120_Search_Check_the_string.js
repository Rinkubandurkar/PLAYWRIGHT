// searching &checking

let url = "https://staging.vwo.com/api/login?retry=true";

console.log(url.includes("staging"));  //true
console.log(url.includes("production"));  //false  

//startsWith() & endsWith()
console.log(url.startsWith("https"));  //true
console.log(url.startsWith("http"));  //true
console.log(url.endsWith(".com"))


//indexOf() & lastIndexOf()
console.log(url.indexOf("a"));  //19
console.log(url.lastIndexOf("a"));  //19

console.log(url.indexOf("nothere"));
console.log(url.indexOf("x"));  //-1

console.log(url.search(/login/));
console.log(url.search(/vwo/)); //-1

// /regex/ is used to search for a pattern in the string. It returns the index of the first match or -1 if not found.
