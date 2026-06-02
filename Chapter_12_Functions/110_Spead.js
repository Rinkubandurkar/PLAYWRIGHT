function add(a, b, c) {
    return a + b + c;
}

let num = [1, 2, 3];
add(...num);


let responseCode = [200, 300, 400, 500];

function hasError(...codes) {
    return codes.some(c => c >= 400)
}
hasError(...responseCode); // Output: true 