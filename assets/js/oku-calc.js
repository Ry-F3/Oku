document.getElementById("switch").addEventListener('click', calcSwitch); // Add event listeners for calculator switch function
let capSwitch = document.getElementById("capSwitch"); // Switching labels
let priceSwitch = document.getElementById("priceSwitch"); //Switching labels
let checkBox = document.getElementById("check"); // Checkbox to swtich labels

let message = "";
let price = 0;
let inputCap = 0;
let inputSupply = 0;

onload = (event) => {
    calcDivide()
};

function calcDivide() { // Calculate price per token

    //change name of function to division and remove top event listeners & add function for multiplication
    document.getElementById("cap-el").addEventListener('keyup', calcDivide); // Add event listeners to the input boxes
    document.getElementById("sup-el").addEventListener('keyup', calcDivide);
    document.getElementById("cap-el").addEventListener('keydown', barStart);

    let inputCap = document.getElementById("cap-el").value;
    let inputSupply = document.getElementById("sup-el").value;
    let price = inputCap / inputSupply;

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
        console.log("Please input values");
    };

    // inputCap.toLocaleString("en-us");
    // console.log(inputCap.toLocaleString("en-us"))
    // inputSupply.toLocaleString("en-us");
    // price.toLocaleString("en-us");

    function barStart() {
        
        if (inputCap < 5){
            let certain = document.getElementById("certain");
            certain.style.display = "block";
        } else if(inputCap > 5) {
            document.getElementById("cap-el").addEventListener('keyup', probability);
            certain.style.display = "none";
            console.log("keyup");
        } else {
            console.log("continue");
        };

     };
    

   function probability() {
    if (inputCap < 100000000) {
        let likely = document.getElementById("likely");
        likely.style.display = 'block';
        console.log("likely");
    } else if (inputCap >= 100000000) {
        let likely = document.getElementById("likely");
        likely.style.display = 'none';
    } else {
        console.log("continue");
    };
    
    if (inputCap >= 100000000 && inputCap < 100000000000) {
        let maybe = document.getElementById("maybe");
        maybe.style.display = 'block';
        console.log("maybe");
    } else {
        console.log("continue");
    };

    if (inputCap >= 100000000000) {
        let unlikely = document.getElementById("unlikely");
        unlikely.style.display = 'block';
        maybe.style.display = 'none';
        console.log("unlikely");
    } else {
        console.log("continue");
    };

    if (inputCap >= 100000000000000) {
        let impossible = document.getElementById("impossible");
        impossible.style.display = 'block';
        unlikely.style.display = 'none';
    } else {
        console.log("continue");
    };

   function barReset() {
  
        likely.style.display = 'none';
        maybe.style.display = 'none';
        unlikely.style.display = 'none';
   };

  };
    
 };

 
function calcMultiply() {


    if (checkbox.checked === true) {

        //change name of function to division and remove top event listeners & add function for multiplication
        document.getElementById("cap-el").addEventListener('keyup', calcMultiply); // Add event listeners to the input boxes
        document.getElementById("sup-el").addEventListener('keyup', calcMultiply);

        let inputCap = document.getElementById("cap-el").value;
        let inputSupply = document.getElementById("sup-el").value;
        let price = inputCap * inputSupply;
        document.getElementById("price").value = price;
    } else {
        return calcDivide();
    };

};


const checkbox = document.getElementById('check')


function calcSwitch() {

    if (checkbox.checked) {
        checkbox.checked = false;
        capSwitch.innerHTML = "Market Cap"; // When unchecked revert back to the original html label
        priceSwitch.innerHTML = "Price";
        console.log("I am dividing");
        valueReset();
    } else {
        checkbox.checked = true;
        capSwitch.innerHTML = "Price"; // When clicked switch html label name for change in functionality
        priceSwitch.innerHTML = "Market Cap";
        console.log("I am multiplying");
        valueReset();
        calcMultiply();
    };
};

function valueReset() { // Reset values of calculator back to default

    let supEl = document.getElementById("sup-el");
    let capEl = document.getElementById("cap-el");
    let price = document.getElementById("price");

    supEl.value = "";
    capEl.value = "";
    price.value = "0";

};


//localStorage.setItem("price", price.toFixed(2));


// Probability Bar 

function probability() {


    if (inputCap > 500000000) {
        let likely = document.getElementById("likely");
        likely.style.display = 'block';
        console.log("hi");
    };
};