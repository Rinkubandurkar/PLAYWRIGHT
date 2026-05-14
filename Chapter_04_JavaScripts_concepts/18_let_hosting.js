console.log(score);   // ReferenceError: Cannot access 'score' before initialization    
let score = 100;
//TDZ (Temporal Dead Zone) is the time between the start of the block and the point
//  where the variable is declared. During this time, the variable cannot be accessed, and any attempt to do so will result in a ReferenceError.

// TDZ of score start here
//console.log(score);   // ReferenceError
//score =50;            // ReferenceError
// Type of score;      // ReferenceError
// TDZ of score end here 

