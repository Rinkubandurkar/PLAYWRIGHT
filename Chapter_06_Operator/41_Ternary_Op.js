let rajkumar_age = 18;

let rj_will_goa = rajkumar_age >= 18 ? "Rj will go goa" : "Rj will not go goa";

console.log(rj_will_goa);

let a = 10;
a += 10;
//a=-10; this don't

let actualStatusCode = 200;
let expectedStatusCode = 200;

let testResult = actualStatusCode === expectedStatusCode ? "Pass" : "Fail";
console.log(testResult);


let isCI = true;
let browserMode = isCI ? "Headless" : "headed";
console.log("Launching brower in :", browserMode, "Mode");

let responseTime = 850;
let sla = 1000;
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA breached";
console.log(`Reponse :${responseTime}ms - ${slaStatus}`);

let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);


//Nested Ternary Operator
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(`Score: ${score}, Grade: ${grade}`);

let age = 26;
let is_pramod_goa = age > 26 ? "Yes,he will go " : " else he will not go";
console.log(is_pramod_goa);


let age_pramod = 45;
let is_pramod_d = age_pramod > 18 ? (age_pramod > 26 ? "Drink" : "Not Drink") : " else he will not go";
console.log(is_pramod_d);



///...................................

let statusCode = 404;
let category = statusCode < 300 ? "Success" : statusCode < 400 ? "Redirect" : statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status Code: ${statusCode}, Category: ${category}`);


let temp = 35;
let feel = (temp >= 40) ? "very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "warm" :
            (temp >= 10) ? "cool" : "cold";

console.log("7.Tempeature:", temp, "| Feel:", feel);
