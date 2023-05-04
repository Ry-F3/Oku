document.addEventListener('DOMContentLoaded', function(){ //DOM loads content with a running function to avoid latency and rendering time for the user
    let addAsset = document.getElementById("asset"); // Selecting the div with an Id of "asset"
 
    for(let i = 0; i < 10; i++){ // Running a for loop to input a unique id "${i}" for the HTML Content
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

   // Add button

    let addButton = document.getElementById("plus_btn"); // Add button, function, which replicates the HTML when clicked
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
    
        asset.classList.add("input_box", "inputBorder", "removeAsset"); // Add classes to the parent div for the main content
        addAsset.appendChild(asset);
        
        let addSpan = document.createElement("div"); // Add the span close button separately in order to add targeted classes for the closeBtn function

        addSpan.innerHTML = `<span>X</span>`;
        addSpan.classList.add("pSymbol", "close");
        asset.appendChild(addSpan);

        for (let i = 0; i < 10; i++){
            asset.setAttribute("id", `asset-${i}`); // For loop adds unique id "${i}" for the user created HTML Content
        };

        // Close button

        const closeBtn = document.querySelectorAll(".close") // The querySelectorAll targets each class with the name "close"
        closeBtn.forEach((btn) => {
             btn.addEventListener('click', ()=>{
                btn.parentElement.style.display = "none";
                console.log("click delete");
             });
        });
        
    });

    
    const closeBtn = document.querySelectorAll(".close") // Repeated code block targeting the original HTML when the DOM loads on start
    closeBtn.forEach((btn) => {
         btn.addEventListener('click', ()=>{
            btn.parentElement.style.display = "none";
            console.log("click delete");
         });
    });


    // document.getElementById("assets-el").addEventListener('keyup', addition);
    
    // function addition(){
    //       console.log("adding");
    //       let addTogether = document.getElementById("assets-el");
    //       console.log(addTogether);
    //  };

  
    
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

   
   
});

 // Portfolio calculations





