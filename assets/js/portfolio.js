// select each nav button
const addButton = document.querySelectorAll(".plus");

// add event listener to each button
addButton.forEach(div => div.addEventListener('click', incrementAsset));

const inputNum = document.querySelectorAll("#assets-el");
console.log(inputNum)

const closeAsset = document.querySelectorAll("#close");
closeAsset.forEach(div => div.addEventListener('click', close));
console.log(closeAsset)


function incrementAsset() {

    let addAsset = document.getElementById("add_asset");
    let asset = document.createElement("div");
    asset.innerHTML =
    `   <select class= "assetBox" name="assetType" id="Type">
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
        <div id="close" class="pSymbol">
            <span>X</span>
        </div>`;

    asset.classList.add("input_box", "inputBorder");
    addAsset.appendChild(asset);
    console.log(asset);
    console.log(addAsset);

};

function close() {
    
    let remove =  document.getElementsByClassName("input_box", "inputBorder")[3].remove(); 
    
};
