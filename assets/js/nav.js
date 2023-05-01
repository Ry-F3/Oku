document.getElementById("portfolio").addEventListener('click', navClick); // Event listeners to switch navbar colors
document.getElementById("oku-calc").addEventListener('click', navClick2);





let parent = document.getElementById("hide_box").getElementsByTagName("div")[0]; // Prepping HTML to be removed from the DOM
console.log(parent);
let child = {
   a: parent.getElementsByTagName("div")[2],
   b: parent.getElementsByTagName("div")[7],
   c: parent.getElementsByTagName("div")[11]
};

const remove = { // Remove variable stores three keys in order to remove elements from the DOM
   a: parent.removeChild(child.a),
   b: parent.removeChild(child.b),
   c: parent.removeChild(child.c)
};

const add = { // Add variable stores the three keys that were removed in order to add them back once "oku calc" button is clicked
   a: parent.appendChild(remove.a),
   b: parent.appendChild(remove.b),
   c: parent.appendChild(remove.c)
 };

function navClick() { // Function for changing the navbar tab to "portfolio"
    if(buttonPortfolio = true) {

        let buttonPortfolio = document.getElementsByClassName("btn_click")[0];
        console.log("buttonPortfolio");
        buttonPortfolio.classList.remove("btn_click");
        buttonPortfolio.classList.add("btn_active");

    } else {
        console.log("false");
    }

    let buttonCalc = document.getElementsByClassName("btn_active")[0];
    console.log(buttonCalc);
    buttonCalc.classList.remove("btn_active");
    buttonCalc.classList.add("btn_click");

    removeHtml()

 };

 function navClick2() { // Function for changing navbar tab back to "oku calc"
     if(buttonCalc = true) {
        let buttonCalc = document.getElementsByClassName("btn_active")[0];
        console.log(buttonCalc);
        buttonCalc.classList.remove("btn_active");
        buttonCalc.classList.add("btn_click");
     }

    let buttonPortfolio = document.getElementsByClassName("btn_click")[0];
    console.log("buttonPortfolio");
    buttonPortfolio.classList.remove("btn_click");
    buttonPortfolio.classList.add("btn_active");

    addHtml()

 };

function removeHtml() {

    const remove = {
        a: parent.removeChild(child.a),
        b: parent.removeChild(child.b),
        c: parent.removeChild(child.c)
    };
};

function addHtml() {

    const add = { 
        a: parent.appendChild(remove.a),
        b: parent.appendChild(remove.b),
        c: parent.appendChild(remove.c)
     };
};

