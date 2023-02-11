const form = document.querySelector(".control-form");
const display = document.querySelector("#size");
const canvas = document.querySelector(".grid");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get size input from DOM
    let size = document.querySelector("#num").value;

    // Display size of grid
    display.textContent = `${size} x ${size}`;

    // Change grid size depending on user input
    canvas.setAttribute("style", `width: ${size}px; height: ${size}px;`);
})