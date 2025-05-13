let display = document.getElementById("display");

function appendValue(value) {
    // Append value to the display input
    display.value += value;
}

function clearDisplay() {
    // Clear the display
    display.value = "";
}

function calculate() {
    try {
        // Evaluate the expression in the display and show the result
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
