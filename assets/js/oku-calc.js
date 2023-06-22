window.addEventListener('DOMContentLoaded', () => {
    updateCalculation(); // Loads the calculation mode
    barStart(); // Call barStart() after DOM content is loaded
});

// Add event listeners for calculator switch function
document.getElementById("switch").addEventListener('click', calcSwitch);

let capSwitch = document.getElementById("capSwitch"); // Switching labels
let priceSwitch = document.getElementById("priceSwitch"); // Switching labels
let checkBox = document.getElementById("check"); // Checkbox to switch labels

let inputCap = 0;
let inputSupply = 0;
let calculationMode = "divide"; // Track the current calculation mode


document.getElementById("cap-el").addEventListener('input', function (event) {
    formatInputValue(event);
    updateProbability();
    if (calculationMode === "divide") {
        calcDivide();
        barStart(); // Call barStart() after updating the calculation
    } else {
        calcMultiply();
    }
});

document.getElementById("sup-el").addEventListener('input', function (event) {
    formatInputValue(event);
    updateProbability();
    if (calculationMode === "divide") {
        calcDivide();
    } else {
        calcMultiply();
    }
});

document.getElementById("cap-el").addEventListener('input', formatInputValue);
document.getElementById("sup-el").addEventListener('input', formatInputValue);

function formatInputValue(event) {
    const inputElement = event.target;
    const inputValue = inputElement.value;

    // Check if the input value is empty
    if (!inputValue) {
        updateCalculation();
        return;
    }

    // Remove commas from the value
    const valueWithoutCommas = inputValue.replace(/,/g, '');

    // Parse the input value as a number
    const parsedValue = parseFloat(valueWithoutCommas);

    // Check if the parsed value is a valid number
    if (isNaN(parsedValue)) {
        updateCalculation();
        return;
    }

    // Format the value with commas
    const formattedValue = formatNumberWithCommas(parsedValue);

    // Check the calculation mode and handle exception for "multiply"
    if (calculationMode === "multiply") {
        // Check if the value contains a dot
        if (inputValue.includes('.')) {
            inputElement.value = inputValue;
        } else {
            inputElement.value = formattedValue;
        }
    } else {
        inputElement.value = formattedValue;
    }

    updateCalculation();
    barStart();
}


function formatNumberWithCommas(number) { // Format the inputed numbers into a string, improving number readerbility
    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function validateInput() { // Check the input box to see if there is a valid number
    if (isNaN(inputCap) || isNaN(inputSupply)) {
        document.getElementById("price").value = "0";
        return false;
    }
    return true;
}

function calcDivide() {
    inputCap = parseFloat(document.getElementById("cap-el").value.replace(/,/g, ''));
    inputSupply = parseFloat(document.getElementById("sup-el").value.replace(/,/g, ''));

    if (isNaN(inputCap) || isNaN(inputSupply)) {
        document.getElementById("price").value = "0";
    } else if (inputCap === 0 || inputSupply <= 0) {
        document.getElementById("price").value = "0";
    } else {
        let price = inputCap / inputSupply;

        if (price > 0.009) {
            document.getElementById("price").value = formatNumberWithCommas(price.toFixed(2));
        } else {
            document.getElementById("price").value = formatNumberWithCommas(price.toFixed(12));
        }
    }

    barStart();
}

function barStart() {
    let inputValid = false;
  
    if (calculationMode === "multiply") {
      // Check for multiply calculation
      inputValid =
        inputCap !== "" &&
        inputSupply !== "" &&
        !isNaN(inputCap) &&
        !isNaN(inputSupply) &&
        parseFloat(inputCap) > 0 &&
        parseFloat(inputSupply) > 0;
    } else if (calculationMode === "divide") {
      // Check for divide calculation
      inputValid =
        inputCap !== "" &&
        inputSupply !== "" &&
        !isNaN(inputCap) &&
        !isNaN(inputSupply) &&
        parseFloat(inputCap) > 0 &&
        (parseFloat(inputSupply) > 0 || parseFloat(price.value.replace(/,/g, '')) > 0);
    }
  
    if (inputValid) {
      // All values are present and valid
      // Hide the element
      let certain = document.getElementById("certain");
      certain.style.display = "none";
    } else {
      // Any of the values is empty, not a number, or less than or equal to 0
      // Show the element
      let certain = document.getElementById("certain");
      certain.style.display = "block";
    }
  }
  
function updateProbability() {
    let likely = document.getElementById("likely");
    let maybe = document.getElementById("maybe");
    let unlikely = document.getElementById("unlikely");
    let impossible = document.getElementById("impossible");

    likely.style.display = 'none';
    maybe.style.display = 'none';
    unlikely.style.display = 'none';
    impossible.style.display = 'none';

    let inputValue;

    if (calculationMode === "divide") {
        inputValue = inputCap;
    } else {
        inputValue = parseFloat(document.getElementById("price").value.replace(/,/g, ''));
    }

    if (inputValue < 100000000) {
        likely.style.display = 'block';
    } else if (inputValue >= 100000000 && inputValue < 100000000000) {
        maybe.style.display = 'block';
    } else if (inputValue >= 100000000000) {
        unlikely.style.display = 'block';
    } else if (inputValue >= 100000000000000) {
        impossible.style.display = 'block';
    }
}


function calcMultiply() {
    inputCap = parseFloat(document.getElementById("cap-el").value.replace(/,/g, ''));
    inputSupply = parseFloat(document.getElementById("sup-el").value.replace(/,/g, ''));

    let price = inputCap * inputSupply;
    document.getElementById("price").value = formatNumberWithCommas(price.toFixed(0));

    if (!validateInput()) {
        return;
    }
    barStart();
}

document.getElementById("cap-el").addEventListener('input', function () {
    formatInputValue();
    probability();
    if (calculationMode === "divide") {
        calcDivide();
    } else {
        calcMultiply();
    }
});

document.getElementById("sup-el").addEventListener('input', function () {
    formatInputValue();
    probability();
    if (calculationMode === "divide") {
        calcDivide();
    } else {
        calcMultiply();
    }
});

function updateCalculation() {
    if (calculationMode === "divide") {
        calcDivide();
        document.getElementById("cap-el").removeEventListener('keyup', calcMultiply);
        document.getElementById("sup-el").removeEventListener('keyup', calcMultiply);
        document.getElementById("cap-el").addEventListener('keyup', calcDivide);
        document.getElementById("sup-el").addEventListener('keyup', calcDivide);
    } else {
        calcMultiply();
        document.getElementById("cap-el").removeEventListener('keyup', calcDivide);
        document.getElementById("sup-el").removeEventListener('keyup', calcDivide);
        document.getElementById("cap-el").addEventListener('keyup', calcMultiply);
        document.getElementById("sup-el").addEventListener('keyup', calcMultiply);
    }
}

function calcSwitch() {
    const inputSupplyElement = document.getElementById("sup-el");

    if (checkBox.checked) {
        checkBox.checked = false;
        capSwitch.innerHTML = "Market Cap";
        priceSwitch.innerHTML = "Price";
        calculationMode = "divide"; // Set calculation mode to divide
        valueReset();
        updateCalculation();
        updateProbability(); // Call updateProbability after switching the calculation mode
        document.getElementById("cap-el").addEventListener('keyup', calcDivide);
        document.getElementById("sup-el").addEventListener('keyup', calcDivide);
        inputSupplyElement.addEventListener("input", barStart);
        barStart();
    } else {
        checkBox.checked = true;
        capSwitch.innerHTML = "Price";
        priceSwitch.innerHTML = "Market Cap";
        calculationMode = "multiply"; // Set calculation mode to multiply
        valueReset();
        updateCalculation();
        updateProbability(); // Call updateProbability after switching the calculation mode
        document.getElementById("cap-el").addEventListener('keyup', calcMultiply);
        document.getElementById("sup-el").addEventListener('keyup', calcMultiply);
        inputSupplyElement.addEventListener("input", barStart);
        barStart();
    }
}

function valueReset() {
    let supEl = document.getElementById("sup-el");
    let capEl = document.getElementById("cap-el");
    let price = document.getElementById("price");

    supEl.value = "";
    capEl.value = "";
    price.value = "0";
}




