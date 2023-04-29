document.getElementById("cap-el").addEventListener('keyup', calcSum); // Add event listeners to the input boxes
document.getElementById("sup-el").addEventListener('keyup', calcSum);

document.getElementById("switch").addEventListener('click', calcSwitch); // Add event listeners for calculator switch function
let capSwitch = document.getElementById("capSwitch"); // Switching labels
let priceSwitch = document.getElementById("priceSwitch"); //Switching labels
let checkBox = document.getElementById("check"); // Checkbox to swtich labels

let message = "";

function calcSum() { // Calculate price per token

    //change name of function to division and remove top event listeners & add function for multiplication
    document.getElementById("cap-el").addEventListener('keyup', calcSum); // Add event listeners to the input boxes
    document.getElementById("sup-el").addEventListener('keyup', calcSum);


    let inputCap = document.getElementById("cap-el").value;
    let inputSupply = document.getElementById("sup-el").value;
    let price = inputCap / inputSupply;
    console.log("hello world")
    if (inputCap && inputSupply && price === 0) {
        console.log("No input");
    } else if (inputCap && inputSupply > price) {
        if (price > 1) {
            document.getElementById("price").value = price.toFixed(2); // If price greater than 1 only display 2 "0"s
        } else {
            document.getElementById("price").value = price.toFixed(12); // If the price is less than 1 add aditional "0"s
        }
    } else if (inputCap | inputSupply === 0) {
        document.getElementById("price").value = 0;
    } else {
        console.log("Error")
    }
}

const checkbox = document.getElementById('check')
calcSwitch()

function calcSwitch() {
    if (checkbox.checked) {
        checkbox.checked = false;
        capSwitch.innerHTML = "Market Cap"; // When unchecked revert back to the original html
        priceSwitch.innerHTML = "Price";
        valueReset();
    } else {
        checkbox.checked = true;
        capSwitch.innerHTML = "Price"; // When clicked switch html for change in functionality
        priceSwitch.innerHTML = "Market Cap";
        valueReset();
        calcSum();
    }
}


function valueReset() {

    let supEl = document.getElementById("sup-el");
    let capEl = document.getElementById("cap-el");
    let price = document.getElementById("price");

    supEl.value = "";
    capEl.value = "";
    price.value = "";

}


//localStorage.setItem("price", price.toFixed(2));

// let label = capSwitch.innerHTML;
// console.log(label);
// capSwitch.innerHTML = "<label>Price</label>";