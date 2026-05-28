let isLoggedIn = true;
let userRole = "admin";

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("Welcome Admin");
    }
    else if (userRole === "viewer") {
        console.log("Welcome Viewer");
    }
    else if (userRole === "editor") {
        console.log("Welcome editor");
    }

    else {
        console.log("No idea you may be a guest user");
    }

}

