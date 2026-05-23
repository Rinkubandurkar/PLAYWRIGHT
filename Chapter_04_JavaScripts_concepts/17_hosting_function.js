function getUserStatus() {
    console.log(stauts_code);
    var stauts_code = "active";
    console.log(stauts_code);
}

getUserStatus();

//var is functional -scoped , so stauts is hoisted to
// the top of getUserStatus function not the global scope
