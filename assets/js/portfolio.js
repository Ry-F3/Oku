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

        addInput.innerHTML = `<input class="pInput" type="number" pattern="[0-9.,]+" placeholder="$0" name="amount" id="inputAsset-3"/>`;
        asset.appendChild(addInput);
        addInput.setAttribute("id", `inputAsset-${i}`);

      
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