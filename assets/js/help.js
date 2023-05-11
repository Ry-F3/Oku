document.getElementById("help_icon").addEventListener('click', help);

function help(){
  let help = document.getElementById("help_icon");
  console.log("click");

     let text = document.getElementById("text_display");
     text.style.display = "block";

};