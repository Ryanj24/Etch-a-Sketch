const form = document.querySelector(".control-form");
const display = document.querySelector("#size");
const canvas = document.querySelector(".grid");




form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get size input from DOM
    let size = document.querySelector("#num").value;

    // Create grid of divs
    for (i = 0; i < size; i++) {
        let divs = document.createElement("div");
        divs.setAttribute("style", `background-color: yellow; border: 1px solid;
        width: ${700/size}px; height: ${700/size}px;`)
        canvas.appendChild(divs);
    }

    // Display size of grid
    display.textContent = `${size} x ${size}`;

    // Change grid size depending on user input
    // NOTE: DONT WANT TO CHANGE THE GRID SIZE BUT USER THIS CODE FOR THE SMALLER
    // INDIVIDUAL DIVS TO GO INSIDE
    //canvas.setAttribute("style", `width: ${size}px; height: ${size}px;`);

})