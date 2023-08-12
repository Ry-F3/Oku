window.addEventListener('DOMContentLoaded', () => {
    updateCalculation(); // Loads the calculation mode
    barStart(); // Call barStart() after DOM content is loaded

    const portfolioTab = document.getElementById('portfolio');
    const okuCalcTab = document.getElementById('oku-calc');
    const tabInfo = document.getElementById("tab_info"); // Get the p element
    const body = document.body;

    // Function to add 'portfolio-active' class when portfolio tab is clicked
    function activatePortfolio() {
        body.classList.add('portfolio-active');
    }

    // Function to remove 'portfolio-active' class when oku-calc tab is clicked
    function deactivatePortfolio() {
        body.classList.remove('portfolio-active');
    }

    portfolioTab.addEventListener('click', activatePortfolio);
    okuCalcTab.addEventListener('click', deactivatePortfolio);

    // Store the original text in a variable
    const originalText = tabInfo.innerHTML;

    let isReverted = false;

    document.getElementById('portfolio').addEventListener('click', function () {
        isReverted = !isReverted;

        if (isReverted) {
            tabInfo.innerText = "Discover your true financial POWER and elevate your wealth game by summing up all your valuable assets! Calculate your net worth and uncover the path to financial success!";
            console.log("change");
        } else {
            tabInfo.innerHTML = originalText; // Revert to the original HTML content
        }
    });

    document.getElementById('oku-calc').addEventListener('click', function () {
        isReverted = false; // Reset isReverted to false when oku calc is clicked
        tabInfo.innerHTML = originalText; // Revert to the initial HTML content
    });


});


// Select each nav button
const navButtons = document.querySelectorAll(".nav-button");

// Add event listener to each button
navButtons.forEach(button => button.addEventListener('click', navigate));

// When the button is clicked
function navigate(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Remove the active class on all buttons
    navButtons.forEach(button => {
        button.classList.remove('btn_active');
        button.classList.add('btn_click');
    });

    // Get all grid input items
    const gridInputs = document.querySelectorAll('.grid_input');
    gridInputs.forEach(item => {
        // If the grid input item has the class name the same as the clicked nav item
        if (item.classList.contains(event.target.id)) {
            // Show it
            item.style.display = 'block';
        } else {
            // Otherwise, hide it
            item.style.display = 'none';
        }
    });

    // Get the clicked button, set the active tab
    const newActiveTab = document.querySelector(`#${event.target.id}`);
    newActiveTab.classList.remove('btn_click');
    newActiveTab.classList.add('btn_active');

}


// Add event listeners for calculator switch function
document.getElementById("switch").addEventListener('click', calcSwitch);

let capSwitch = document.getElementById("capSwitch"); // Switching labels
let supSwitch = document.getElementById("supSwitch"); // Switching labels
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

// Prevent specified characters in input fields
document.getElementById("cap-el").addEventListener('keydown', function (event) {
    if (calculationMode === "multiply") {
        // Allow the period (.) in "divide" mode, but exclude other characters
        if (event.key === '.' || /[\-[\.]{}<>]/.test(event.key)) {
            return;
        }
    } else if (/[\./\-[\]{}<>]/.test(event.key) || event.key === 'e' || event.key === 'E') {
        // Prevent specified characters and 'e' or 'E' in both calculation modes, which are eponential notations used in numbers 
        // (e.g "1E+10" rewpresents 1 multiplied by 10 to the power of 10).
        event.preventDefault();
    }
});

document.getElementById("price").addEventListener('keydown', function (event) {
    if (/[\/\-\[\]{}<>]/.test(event.key)) {
        event.preventDefault();
    }
});

document.getElementById("sup-el").addEventListener('keydown', function (event) {
    if (/[\/\-\.[\]{}<>]/.test(event.key)) {
        event.preventDefault();
    }
});

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
            (parseFloat(inputSupply) > 0);
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

function calcSwitch(event) {
    event.preventDefault(); // Prevent the form from submitting
    const inputSupplyElement = document.getElementById("sup-el");

    if (checkBox.checked) {
        checkBox.checked = false;
        capSwitch.innerHTML = `
            <span class="tooltip-btn"
                title="(Market Cap = Current Price per Coin x Circulating Supply). Market Cap, short for Market Capitalisation, is a financial metric used to measure the total value or size of a publicly traded company or a cryptocurrency.">Market
                Cap</span>`;
        supSwitch.innerHTML = `
        <span class="tooltip-btn"
        title="Circulating supply, in the context of cryptocurrencies, it refers to the total number of coins or tokens that are available and actively circulating in the market at a given point in time.">Circulating
        Supply</span>`;
        priceSwitch.innerHTML = `
            <span class="tooltip-btn" title="(Price per Coin = Market Cap / Circulating Supply)">Price</span>`;
        calculationMode = "divide"; // Set calculation mode to divide

        // Remove event listeners related to multiply mode
        document.getElementById("cap-el").removeEventListener('keyup', calcMultiply);
        document.getElementById("sup-el").removeEventListener('keyup', calcMultiply);
        inputSupplyElement.removeEventListener("input", barStart);

        // Add event listeners for divide mode
        document.getElementById("cap-el").addEventListener('keyup', calcDivide);
        document.getElementById("sup-el").addEventListener('keyup', calcDivide);
        inputSupplyElement.addEventListener("input", barStart);

        valueReset();

        barStart();
    } else {
        checkBox.checked = true;
        capSwitch.innerHTML = `
            <span class="tooltip-btn" title="Enter your desired price target ...">Price</span>` ;
        supSwitch.innerHTML = `
        <span class="tooltip-btn"
        title="(Circulating Supply = Market Cap / Current Price per Coin)">Circulating Supply</span>`;
        priceSwitch.innerHTML = ` 
        <span class="tooltip-btn"
        title="(Market Cap = Current Price per Coin x Circulating Supply)">Market
        Cap</span>`;
        calculationMode = "multiply"; // Set calculation mode to multiply

        // Remove event listeners related to divide mode
        document.getElementById("cap-el").removeEventListener('keyup', calcDivide);
        document.getElementById("sup-el").removeEventListener('keyup', calcDivide);
        inputSupplyElement.removeEventListener("input", barStart);

        // Add event listeners for multiply mode
        document.getElementById("cap-el").addEventListener('keyup', calcMultiply);
        document.getElementById("sup-el").addEventListener('keyup', calcMultiply);
        inputSupplyElement.addEventListener("input", barStart);

        valueReset();

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




