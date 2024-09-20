// Define cake attributes
const cakeFlavours = ["Italian", "Tuscan", "Portabella", "Prima", "Paradiso", "Napoletana"];
const cakeSizes = ["Small", "Medium", "Large", "Jumbo"];
const cakeCrusts = ["Thin", "Thick", "Crispy", "Gluten-free"];
const cakeToppings = ["Fruits", "Bacon", "Cheese", "Mushroom"];

// Function to get the value of the selected option
function getSelectedValue(selector) {
    return parseInt($(selector + " :selected").val());
}

// Function to get the number of cakes
function getNumberOfCakes() {
    return parseInt($("#number").val());
}

// Function to calculate the total amount
function calculateTotal(flavour, size, crust, topping, number) {
    return (flavour + size + crust + topping) * number;
}

// Function to handle delivery orders
function handleDeliveryOrder(flavour, size, crust, topping, number) {
    const total = calculateTotal(flavour, size, crust, topping, number);
    alert(
        `You've ordered ${number} cake(s) with the following details:
        - Flavour: ${$("#cakeflavour :selected").text()}
        - Size: ${$("#cakesize :selected").text()}
        - Crust: ${$("#cakecrust :selected").text()}
        - Topping: ${$("#caketopping :selected").text()}
        Total amount: NGN ${total}
        Thanks for your order!`
    );
    prompt("Enter your location");
    prompt("Enter your name");
    prompt("Enter your phone number");
    alert("Your order will be delivered shortly. Delivery fee is NGN 1000.");
}

// Function to handle pick-up orders
function handlePickupOrder(flavour, size, crust, topping, number) {
    const total = calculateTotal(flavour, size, crust, topping, number);
    alert(
        `You've ordered ${number} cake(s) with the following details:
        - Flavour: ${$("#cakeflavour :selected").text()}
        - Size: ${$("#cakesize :selected").text()}
        - Crust: ${$("#cakecrust :selected").text()}
        - Topping: ${$("#caketopping :selected").text()}
        Total amount: NGN ${total}
        Thanks for shopping with us!`
    );
}

// User Interface logic
$(document).ready(function () {
    $("#make-delivery").click(function (event) {
        event.preventDefault();
        const flavour = getSelectedValue("#cakeflavour");
        const size = getSelectedValue("#cakesize");
        const crust = getSelectedValue("#cakecrust");
        const topping = getSelectedValue("#caketopping");
        const number = getNumberOfCakes();
        handleDeliveryOrder(flavour, size, crust, topping, number);
    });

    $("#pick-up").click(function (event) {
        event.preventDefault();
        const flavour = getSelectedValue("#cakeflavour");
        const size = getSelectedValue("#cakesize");
        const crust = getSelectedValue("#cakecrust");
        const topping = getSelectedValue("#caketopping");
        const number = getNumberOfCakes();
        handlePickupOrder(flavour, size, crust, topping, number);
    });
});

