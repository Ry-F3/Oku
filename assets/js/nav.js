// select each nav button
const navButtons = document.querySelectorAll(".nav-button");

// add event listener to each button
navButtons.forEach(button => button.addEventListener('click', navigate));

// when the button is clicked
function navigate(event) {
    // remove the active class on all buttons
    navButtons.forEach(button => {
        button.classList.remove('btn_active');
        button.classList.add('btn_click');
    });

    // get all grid input items
    const gridInputs = document.querySelectorAll('.grid_input');
    gridInputs.forEach(item => {
        // if the gir input item has a class name the same as the clicked nav item
        if (item.classList.contains(event.target.id)) {
            // show it
            item.style.display = 'block';
        }
        // other wise hide it
        else item.style.display = 'none';
    });

    // get the clicked button, set the active tab
    const newActiveTab = document.querySelector(`#${event.target.id}`);
    newActiveTab.classList.remove('btn_click');
    newActiveTab.classList.add('btn_active');
}





