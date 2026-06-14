//Real QA scenario : E-commerce End to End Checkout - 20+ Step Callback Hell

function openBrowser(callback) {
    console.log("Step 1 - Opening the browser");
    setTimeout(function () { callback(); }, 500);
}

function navigateToUrl(callback) {
    console.log("Step 2 - Navigating to URL");
    setTimeout(function () { callback(); }, 500);
}

function enterUsername(callback) {
    console.log("Step 3 - Entering username");
    setTimeout(function () { callback(); }, 500);
}

function enterPassword(callback) {
    console.log("Step 4 - Entering password");
    setTimeout(function () { callback(); }, 500);
}

function clickLogin(callback) {
    console.log("Step 5 - Clicking login button");
    setTimeout(function () { callback(); }, 500);
}

function verifyDashboard(callback) {
    console.log("Step 6 - Verifying dashboard loaded");
    setTimeout(function () { callback(); }, 500);
}

function navigateToProducts(callback) {
    console.log("Step 7 - Navigating to products page");
    setTimeout(function () { callback(); }, 500);
}

function searchProduct(callback) {
    console.log("Step 8 - Searching for product");
    setTimeout(function () { callback(); }, 500);
}

function selectProduct(callback) {
    console.log("Step 9 - Selecting product from results");
    setTimeout(function () { callback(); }, 500);
}

function addToCart(callback) {
    console.log("Step 10 - Adding product to cart");
    setTimeout(function () { callback(); }, 500);
}

function viewCart(callback) {
    console.log("Step 11 - Viewing cart");
    setTimeout(function () { callback(); }, 500);
}

function proceedToCheckout(callback) {
    console.log("Step 12 - Proceeding to checkout");
    setTimeout(function () { callback(); }, 500);
}

function enterShippingAddress(callback) {
    console.log("Step 13 - Entering shipping address");
    setTimeout(function () { callback(); }, 500);
}

function enterBillingAddress(callback) {
    console.log("Step 14 - Entering billing address");
    setTimeout(function () { callback(); }, 500);
}

function selectPaymentMethod(callback) {
    console.log("Step 15 - Selecting payment method");
    setTimeout(function () { callback(); }, 500);
}

function enterCardDetails(callback) {
    console.log("Step 16 - Entering card details");
    setTimeout(function () { callback(); }, 500);
}

function applyCoupon(callback) {
    console.log("Step 17 - Applying coupon code");
    setTimeout(function () { callback(); }, 500);
}

function reviewOrder(callback) {
    console.log("Step 18 - Reviewing order summary");
    setTimeout(function () { callback(); }, 500);
}

function placeOrder(callback) {
    console.log("Step 19 - Placing the order");
    setTimeout(function () { callback(); }, 500);
}

function verifyOrderConfirmation(callback) {
    console.log("Step 20 - Verifying order confirmation");
    setTimeout(function () { callback(); }, 500);
}

function sendEmailNotification(callback) {
    console.log("Step 21 - Sending email notification");
    setTimeout(function () { callback(); }, 500);
}

function logout(callback) {
    console.log("Step 22 - Logging out");
    setTimeout(function () { callback(); }, 500);
}

// THIS IS CALLBACK HELL - 22 levels deep!
openBrowser(function () {
    navigateToUrl(function () {
        enterUsername(function () {
            enterPassword(function () {
                clickLogin(function () {
                    verifyDashboard(function () {
                        navigateToProducts(function () {
                            searchProduct(function () {
                                selectProduct(function () {
                                    addToCart(function () {
                                        viewCart(function () {
                                            proceedToCheckout(function () {
                                                enterShippingAddress(function () {
                                                    enterBillingAddress(function () {
                                                        selectPaymentMethod(function () {
                                                            enterCardDetails(function () {
                                                                applyCoupon(function () {
                                                                    reviewOrder(function () {
                                                                        placeOrder(function () {
                                                                            verifyOrderConfirmation(function () {
                                                                                sendEmailNotification(function () {
                                                                                    logout(function () {
                                                                                        console.log("E2E Test Complete!");
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
