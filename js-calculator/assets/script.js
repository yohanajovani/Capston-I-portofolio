function calculate() {
    // Clear any error or output messages
    document.getElementById("Operand1Error").innerHTML = "";
    document.getElementById("Operand2Error").innerHTML = "";
    document.getElementById("Result").innerHTML = "";

    // Error Flag - True if an error has occurred
    var errorflag = false;

    // Get operands from form
    var operand1 = document.getElementById("Operand1").value;
    var operand2 = document.getElementById("Operand2").value;

    // Check for required operands and if they are numbers
    if (!operand1) {
        document.getElementById("Operand1Error").innerHTML = "Operand 1 is Required";
        errorflag = true;
    } else if (isNaN(operand1)) {
        document.getElementById("Operand1Error").innerHTML = "Operand 1 Must be a Numeric Value";
        errorflag = true;
    }

    if (!operand2) {
        document.getElementById("Operand2Error").innerHTML = "Operand 2 is Required";
        errorflag = true;
    } else if (isNaN(operand2)) {
        document.getElementById("Operand2Error").innerHTML = "Operand 2 Must be a Numeric Value";
        errorflag = true;
    }

    // Check that an operator is selected
    var operatorSelected = document.querySelector('input[name="Operator"]:checked');
    if (!operatorSelected) {
        document.getElementById("OperatorError").innerHTML = "Operator is Required";
        errorflag = true;
    }

    // if there is no error, perform the calculations
    if (!errorflag) {
        var operand1fp = parseFloat(operand1);
        var operand2fp = parseFloat(operand2);
        var result;
        
        // Perform calculation based on selected operator
        switch(operatorSelected.value) {
            case 'Add':
                result = operand1fp + operand2fp;
                break;
            case 'Subtract':
                result = operand1fp - operand2fp;
                break;
            case 'Multiply':
                result = operand1fp * operand2fp;
                break;
            case 'Divide':
                if(operand2fp === 0) {
                    document.getElementById("Operand2Error").innerHTML = "Cannot divide by zero";
                    return;
                }
                result = operand1fp / operand2fp;
                break;
        }

        // Display result
        document.getElementById("Result").innerHTML = result.toString();
    }
}

function clearform() {
    document.getElementById("calculatorForm").reset();
    document.getElementById("Operand1Error").innerHTML = "";
    document.getElementById("Operand2Error").innerHTML = "";
    document.getElementById("OperatorError").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}