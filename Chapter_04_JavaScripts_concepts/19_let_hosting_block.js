// let is blocked scope

let x = "global";
if (true) {
    //console.log(x);    // TDZ for BLOCK SCOPE //reference error

    let x = "block scope";   // TDZ end 
    console.log(x);          // block
}
console.log(x);