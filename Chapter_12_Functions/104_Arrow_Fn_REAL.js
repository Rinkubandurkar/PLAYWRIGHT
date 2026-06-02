//if (ourStatusCode>=200 &&ourStatusCode<300){

function validateStatusCode(statusCode) {
    if (statusCode >= 200 && statusCode < 300) {
        console.log("Request is fine")
    }
}

const ValidatieSatusCode_Exp = function (status) {
    if (statusCode >= 200 && statusCode < 300) {
        console.log("Request is fine")
    }
}


const validateStatusCode_Arrow = (status) => {
    if (statusCode >= 200 && statusCode < 300) {
        console.log("Request is fine")
    }
}

validateStatusCode(200);
validateStatusCode_Arrow(200);
validateStatusCode_Exp(200);    