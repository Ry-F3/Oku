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

    // inputCap.toLocaleString("en-us");
    // console.log(inputCap.toLocaleString("en-us"))
    // inputSupply.toLocaleString("en-us");
    // price.toLocaleString("en-us");
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


function valueReset() { // Reset values of calculator back to default

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




////// code for adding button


const addButton = document.querySelectorAll(".plus");


addButton.forEach(div => div.addEventListener('click', incrementAsset));

const inputNum = document.querySelectorAll("#assets-el");
console.log(inputNum)

const closeAsset = document.querySelectorAll(".close");
closeAsset.forEach(div => div.addEventListener('click', close));
console.log(closeAsset)



function incrementAsset() {

    let addAsset = document.getElementById("add_asset");
    let asset = document.createElement("div");
    asset.innerHTML =
       `<select class= "assetBox" name="assetType" id="Type">
            <option value="Crypto">&#xf379;</option>
            <option value="Stock">&#xf201;</option>
            <option value="commodities">&#xf3a5;</option>
            <option value="bussiness">&#xf0b1;</option>
            <option value="fiat">&#xf19c;</option>
            <option value="real-estate">&#xe00d;</option>
        </select>
        <span>
            <input class="pInput" type="number" pattern="[0-9.,]+" placeholder="$0" name="amount" id="assets-el"/>
        </span> 
        <div class="pSymbol close">
            <span onclick="close()">X</span>
        </div>`;

    asset.classList.add("input_box", "inputBorder");
    addAsset.appendChild(asset);
    console.log(asset);
    console.log(addAsset);
    
};

function close() {
     
    document.getElementsByClassName("input_box")[3].remove();
      
};


// console.log(removeAsset);
    // console.log(close);
// let closeButton = document.getElementsByClassName("close");
//         console.log(closeButton);
var removeAsset =  document.getElementsByClassName("input_box", "inputBorder"); 
for (var i = 0; i < removeAsset.length; i++) {
removeAsset[i].addEventListener("click", close);
 }

// console.log(removeAsset)

document.addEventListener('DOMContentLoaded', function(){
    let container = document.getElementById('container')
    
    for (let i = 1; i < 10; i++){
        container.innerHTML = `<div id=box-${i}></div>`
    }

    let button = document.getElementById('add-button')
    button.addEventListener('click', function(){
        container.innerHTML = '<div class="box">whatever</div>'
    })

    let boxes = this.getElementsByClassName('boxes')
    // get an array
    // [1, 2, 3, 4, 5, 6]

    for (let i = 0; i < 10; i++){
        i.setAttribute(`id="box-${i}`)
    }
    // removeAttribute(id)
    
        
})



// new portfolio code 

document.addEventListener('DOMContentLoaded', function(){
    let addAsset = document.getElementById("asset");
 
    for(let i = 0; i < 10; i++){
        addAsset.innerHTML = `  
            <label class="input_label" for="asset-el">Assets</label>    
            <div id="asset-${i}" class="input_box inputBorder removeAsset">
                <select class= "assetBox" name="assetType" id="Type">
                    <option value="Crypto">&#xf379;</option>
                    <option value="Stock">&#xf201;</option>
                    <option value="commodities">&#xf3a5;</option>
                    <option value="bussiness">&#xf0b1;</option>
                    <option value="fiat">&#xf19c;</option>
                    <option value="real-estate">&#xe00d;</option>
                </select>
                <span>
                    <input class="pInput" type="number" pattern="[0-9.,]+" placeholder="$0" name="amount" id="assets-el"/>
                </span> 
                <div class="pSymbol close">
                    <span>X</span>
                </div>
            </div>
        <div id="asset-${i}" class="input_box inputBorder removeAsset">
            <select class= "assetBox" name="assetType" id="Type">
                <option value="Crypto">&#xf379;</option>
                <option value="Stock">&#xf201;</option>
                <option value="commodities">&#xf3a5;</option>
                <option value="bussiness">&#xf0b1;</option>
                <option value="fiat">&#xf19c;</option>
                <option value="real-estate">&#xe00d;</option>
            </select>
            <span>
                <input class="pInput" type="number" pattern="[0-9.,]+" placeholder="$0" name="amount" id="assets-el"/>
            </span> 
            <div class="pSymbol close">
                <span>X</span>
            </div>
        </div>
        <div id="asset-${i}" class="input_box inputBorder removeAsset">
            <select class= "assetBox" name="assetType" id="Type">
                <option value="Crypto">&#xf379;</option>
                <option value="Stock">&#xf201;</option>
                <option value="commodities">&#xf3a5;</option>
                <option value="bussiness">&#xf0b1;</option>
                <option value="fiat">&#xf19c;</option>
                <option value="real-estate">&#xe00d;</option>
            </select>
            <span>
                <input class="pInput" type="number" pattern="[0-9.,]+" placeholder="$0" name="amount" id="assets-el"/>
            </span> 
            <div class="pSymbol close">
                <span>X</span>
            </div>
        </div>`;
    };

  

    let addButton = document.getElementById("plus_btn");
    addButton.addEventListener('click', function(){
        console.log("click add")
        let addAsset = document.getElementById("asset");
        let asset = document.createElement("div");
        
        asset.innerHTML =
        ` 
           <select class= "assetBox" name="assetType" id="Type">
               <option value="Crypto">&#xf379;</option>
               <option value="Stock">&#xf201;</option>
               <option value="commodities">&#xf3a5;</option>
               <option value="bussiness">&#xf0b1;</option>
               <option value="fiat">&#xf19c;</option>
               <option value="real-estate">&#xe00d;</option>
           </select>
           <span>
               <input class="pInput" type="number" pattern="[0-9.,]+" placeholder="$0" name="amount" id="assets-el"/>
           </span> 
           `;
    
        asset.classList.add("input_box", "inputBorder", "removeAsset");
        addAsset.appendChild(asset);
        console.log(asset);
        console.log(addAsset);
        console.log(closeButton);

        let add = document.getElementById("asset-9");

        let closeBtn = document.createElement("div");
        closeBtn.addEventListener('click', function handleClick(event) {
            close();
        });

        closeBtn.innerHTML = `<span>X</span>`;
        closeBtn.classList.add("pSymbol", "close");
        asset.appendChild(closeBtn);

    

        for (let i = 0; i < 10; i++){
            asset.setAttribute("id", `asset-${i}`);
        };


        
    });

 


    let assetNum = document.getElementById("asset-9");
    console.log(assetNum);
   

    // for (let i = 0; i < 10; i++){
    //     i.setAttribute[0]= (`id="asset-${i}`);
    // };

    // console.log(i);

    
    // const closeAsset = document.querySelectorAll(".close");
    // closeAsset.forEach(div => div.addEventListener('click', close));

    let closeButton = this.getElementsByClassName("close");
    console.log(closeButton);
    let i = 0;
    while( i < closeButton.length){
        console.log("loop");
        const closeAsset = document.querySelectorAll(".close");
        closeAsset.forEach(div => div.addEventListener('click', close));
        i++;
      
    };

    

    function close(){
        console.log("click delete");
        let closeButtons = document.getElementById("asset-9").appendChild.length;
        if(closeButtons) {
            document.getElementsByClassName("removeAsset")[0].remove();
        }

        
        
    };

});

const plusBtn = document.querySelectorAll("plus_btn");
//     console.log(plusBtn);
//     plusBtn.forEach(span => span.addEventListener('click', createAsset));

//     function createAsset(){
//         console.log("click")
//         let addAsset = document.getElementById("asset");
//         let asset = document.createElement("div");
        
//         asset.innerHTML =
//         ` 
//            <select class= "assetBox" name="assetType" id="Type">
//                <option value="Crypto">&#xf379;</option>
//                <option value="Stock">&#xf201;</option>
//                <option value="commodities">&#xf3a5;</option>
//                <option value="bussiness">&#xf0b1;</option>
//                <option value="fiat">&#xf19c;</option>
//                <option value="real-estate">&#xe00d;</option>
//            </select>
//            <span>
//                <input class="pInput" type="number" pattern="[0-9.,]+" placeholder="$0" name="amount" id="assets-el"/>
//            </span> 
//            `;
    
//         asset.classList.add("input_box", "inputBorder", "removeAsset");
//         addAsset.appendChild(asset); 

// calculations 

const netWorth = document.getElementById("net_worth").value;
let addTogether = document.querySelectorAll("#assets-el");
 addTogether.forEach((input) => {
      input.addEventListener('click', ()=>{
        let sum = 0;
        let num = document.getElementById("assets-el").value;
        let numArray = [];
        let size = 3;
        console.log(numArray);


        for (let i = 0; i < addTogether.length; i++){
            numArray[i] = document.getElementById("assets-el").value + (i+1) ;
        };
    
        console.log(sum);
        console.log(numArray);

      });
 });


  // document.getElementById("assets-el").addEventListener('keyup', addition);
    
    // function addition(){
    //       console.log("adding");
    //       let addTogether = document.getElementById("assets-el");
    //       console.log(addTogether);
    //  };


     // console.log(numArray);

            // for (let i = 0; i < addTogether.length; i++) {
            //     addTogether[i] + (i);
            //     // console.log(addTogether);

            //     num.setAttribute("id", `inputAsset-${i}`);
            //     console.log(num)
            // }

        




                // for (let i = 0; i < addTogether.length; i++){
                //     numArray[i] = document.getElementById("assets-el").value + (i) ;
                // };

                // console.log(sum);
                // console.log(numArray);

                let sum = 0;

                //     let num = document.getElementById("inputAsset-");
                    
                //     let size = 3;
                   
        
                //     let text = document.getElementById("inputAsset-");
                //     const numArray = [];
                //     numArray.forEach(myFunction);
        
        
        
                //     function myFunction(item, index) {
                //         text += index + ": " + item + "<br>";
                //     }
        
        
                // })

                document.addEventListener('DOMContentLoaded', function () { //DOM loads content with a running function to avoid latency and rendering time for the user
                    let addAsset = document.getElementById("asset"); // Selecting the div with an Id of "asset"
                
                    for (let i = 0; i < 10; i++) { // Running a for loop to input a unique id "${i}" for the HTML Content
                        addAsset.innerHTML = `  
                            <label class="input_label" for="asset-el">Assets</label>    
                            <div id="asset-${i}" class="input_box inputBorder removeAsset">
                                <select class= "assetBox" name="assetType" id="Type">
                                    <option value="Crypto">&#xf379;</option>
                                    <option value="Stock">&#xf201;</option>
                                    <option value="commodities">&#xf3a5;</option>
                                    <option value="bussiness">&#xf0b1;</option>
                                    <option value="fiat">&#xf19c;</option>
                                    <option value="real-estate">&#xe00d;</option>
                                </select>
                                <span>
                                    <input class="pInput" type="number" pattern="[0-9.,]+" placeholder="$0" name="amount" id="inputAsset-"/>
                                </span> 
                                <div class="pSymbol close">
                                    <span>X</span>
                                </div>
                            </div>
                        <div id="asset-${i}" class="input_box inputBorder removeAsset">
                            <select class= "assetBox" name="assetType" id="Type">
                                <option value="Crypto">&#xf379;</option>
                                <option value="Stock">&#xf201;</option>
                                <option value="commodities">&#xf3a5;</option>
                                <option value="bussiness">&#xf0b1;</option>
                                <option value="fiat">&#xf19c;</option>
                                <option value="real-estate">&#xe00d;</option>
                            </select>
                            <span>
                                <input class="pInput" type="number" pattern="[0-9.,]+" placeholder="$0" name="amount" id="inputAsset-"/>
                            </span> 
                            <div class="pSymbol close">
                                <span>X</span>
                            </div>
                        </div>
                        <div id="asset-${i}" class="input_box inputBorder removeAsset">
                            <select class= "assetBox" name="assetType" id="Type">
                                <option value="Crypto">&#xf379;</option>
                                <option value="Stock">&#xf201;</option>
                                <option value="commodities">&#xf3a5;</option>
                                <option value="bussiness">&#xf0b1;</option>
                                <option value="fiat">&#xf19c;</option>
                                <option value="real-estate">&#xe00d;</option>
                            </select>
                            <span>
                                <input class="pInput" type="number" pattern="[0-9.,]+" placeholder="$0" name="amount" id="inputAsset-"/>
                            </span> 
                            <div class="pSymbol close">
                                <span>X</span>
                            </div>
                        </div>`;
                    };
                
                    // Add button
                
                    let addButton = document.getElementById("plus_btn"); // Add button, function, which replicates the HTML when clicked
                    addButton.addEventListener('click', function () {
                        console.log("click add")
                        let addAsset = document.getElementById("asset");
                        let asset = document.createElement("div");
                
                        asset.innerHTML =
                            ` 
                           <select class= "assetBox" name="assetType" id="Type">
                               <option value="Crypto">&#xf379;</option>
                               <option value="Stock">&#xf201;</option>
                               <option value="commodities">&#xf3a5;</option>
                               <option value="bussiness">&#xf0b1;</option>
                               <option value="fiat">&#xf19c;</option>
                               <option value="real-estate">&#xe00d;</option>
                           </select>
                           `;
                
                        asset.classList.add("input_box", "inputBorder", "removeAsset"); // Add classes to the parent div for the main content
                        addAsset.appendChild(asset);
                
                        let addInput = document.createElement("span");
                
                        addInput.innerHTML = `<input class="pInput" type="number" pattern="[0-9.,]+" placeholder="$0" name="amount" />`;
                        asset.appendChild(addInput);
                
                
                        let addSpan = document.createElement("div"); // Add the span close button separately in order to add targeted classes for the closeBtn function
                
                        addSpan.innerHTML = `<span>X</span>`;
                        addSpan.classList.add("pSymbol", "close");
                        asset.appendChild(addSpan);
                
                        for (let i = 0; i < 10; i++) {
                            asset.setAttribute("id", `asset-${i}`); // For loop adds unique id "${i}" for the user created HTML Content
                        };
                
                        // Close button
                
                        const closeBtn = document.querySelectorAll(".close") // The querySelectorAll targets each class with the name "close"
                        closeBtn.forEach((btn) => {
                            btn.addEventListener('click', () => {
                                btn.parentElement.style.display = "none";
                                console.log("click delete");
                            });
                        });
                
                    });
                
                
                    const closeBtn = document.querySelectorAll(".close") // Repeated code block targeting the original HTML when the DOM loads on start
                    closeBtn.forEach((btn) => {
                        btn.addEventListener('click', () => {
                            btn.parentElement.style.display = "none";
                            console.log("click delete");
                        });
                    });
                
                
                
                    const netWorth = document.getElementById("net_worth").value; // Function that finds the total value of the users assets by storing the values in an array
                    let addTogether = document.querySelectorAll("#inputAsset-");
                    addTogether.forEach((input) => {
                        input.addEventListener('keyup', function () {
                            let num1 = document.getElementById("inputAsset-0").value;
                            console.log(num1);
                            let num2 = document.getElementById("inputAsset-1").value;
                            console.log(num2);
                            let num3 = document.getElementById("inputAsset-2").value;
                            console.log(num3);
                            let sumTotal = document.getElementById("net_worth").value;
                            sum = 0;
                
                            const myArray = [num1, num2, num3];
                
                            for(var i=0; i < myArray.length; i++){
                
                                sum += parseInt(myArray[i]);
                    
                            };
                
                            console.log(sum);
                            
                            equals()
                            function equals(){
                            if (sum > 1) {
                                console.log("Total Value");
                                document.getElementById("net_worth").value = sum.toFixed(2); 
                            } else {
                                console.log("no sum");
                            };
                          };
                  
                
                       });
                    });
                
                    
                    for (var i = 0; i < addTogether.length; i++) {
                        addTogether[i].setAttribute("id", `inputAsset-${i}`); // For loop that gives the input boxes unique Id codes in order to sum the values
                        console.log(addTogether);
                    };
                
                
                
                
                });
                
                // Portfolio calculations

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