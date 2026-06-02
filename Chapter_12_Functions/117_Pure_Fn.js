//Pure Function
// A pure function is a function that always produces the same output for the same input and has no side effects (it does not modify any external state).

function calculatePassRate(passed, total) {
    return ((passed / total) * 100).toFixed(2);
}

console.log(calculatePassRate(7, 10)); // Output: 80.00

//impure function example

function isPassing(score) {
    return score >= threshold;
}

let threshold = 70;
console.log(isPassing(threshold)); // Output: true

let threshold = 80;
console.log(isPassing(threshold)); // Output: false (depends on external variable)  