document.addEventListener('DOMContentLoaded', function () { //DOM loads content with a running function to avoid latency and rendering time for the user
    let addAsset = document.getElementById("asset"); // Selecting the div with an Id of "asset"
    let idIndex = 0; // Value of id specific index

    addAsset.innerHTML = `<label class="input_label_p" for="asset-el">Assets</label> `;
    for (let i = 0; i < 4; i++) { // Running a for loop to input a unique id "${i}" for the HTML Content
        addAsset.innerHTML += `  
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
                    <input class="pInput" type="number" pattern="[0-9.,]+" placeholder="$0" name="amount" id="inputAsset-${i}" value=""/>
                </span> 
                <div class="pSymbol">
                    <span class="close">X</span>
                </div>
            </div>`;
        idIndex = idIndex +1; // Increment idIndex for the loop to display the HTML * 3
    
    }

    // Prevent "minus" numbers
    const inputFields = document.querySelectorAll("input.pInput");
    inputFields.forEach((input) => {
        input.addEventListener('keydown', function (event) {
            if (event.key === '-') {
                event.preventDefault();
            }
        });
    })

    // Add button

    let addButton = document.getElementById("plus_btn"); // Add button, function, which replicates the HTML when clicked
    addButton.addEventListener('click', function () {
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

        addInput.innerHTML = `<input class="pInput" type="number" value="" pattern="[0-9.,]+" placeholder="$0" name="amount" id="inputAsset-${idIndex}"/>`;
        asset.appendChild(addInput);
        idIndex = idIndex + 1; // Increment idIndex for the newly created HTML called when the add button is pressed
        
      
        let addSpan = document.createElement("div"); // Add the span close button separately in order to add targeted classes for the closeBtn function

        addSpan.innerHTML = `<span class="close">X</span>`;
        addSpan.classList.add("pSymbol");
        asset.appendChild(addSpan);
        updateNetWorth();
        updateListeners();
        updateCloseListeners();
    });

    function deleteInput(btn){ // Delete input boxes
        btn.parentElement.parentElement.remove(); // Remove parent of the parent
        updateNetWorth();
        updateListeners();
    }
    function deleteInputDiv(btn){ // Delete input box and btn div
        btn.parentElement.remove();
        updateNetWorth();
        updateListeners();
    }


    function updateCloseListeners(){
        const closeBtn = document.querySelectorAll(".close"); // Repeated code block targeting the original HTML when the DOM loads on start
        closeBtn.forEach((btn) => {
            btn.removeEventListener('click', (event)=>{ // Event target 
                deleteInput(event.target);
            });
            btn.addEventListener('click', (event)=>{ // Event target 
                deleteInput(event.target);
            });
        });
        const closeDiv = document.querySelectorAll(".pSymbol"); // Repeated code block targeting the original HTML when the DOM loads on start
        closeDiv.forEach((btn) => {
            btn.removeEventListener('click', (event)=>{ // Event target 
                deleteInputDiv(event.target);
            });
            btn.addEventListener('click', (event)=>{ // Event target 
                deleteInputDiv(event.target);
            });
        });
    }

    // Portfolio calculations
    function updateNetWorth() {
        let netWorth = 0;
        let addTogether = document.querySelectorAll("input.pInput");
        addTogether.forEach((input) => {
          const value = parseFloat(input.value); // Convert value to a float 
          netWorth += isNaN(value) ? 0 : value; // Treat empty fields as 0 during calculations
        });
        document.getElementById("net_worth").value = netWorth.toFixed(2); // Display the result with 2 decimal places
      }

    function updateListeners(){
        let addTogether = document.querySelectorAll("input.pInput");
        addTogether.forEach((input) => {
            input.removeEventListener('change', updateNetWorth); // Update listeners, which loop with the HTML content being created and delted
            input.removeEventListener('keyup', updateNetWorth);
            input.addEventListener('change', updateNetWorth);
            input.addEventListener('keyup', updateNetWorth);
        });
        
    }
    updateListeners();
    updateCloseListeners();

});

