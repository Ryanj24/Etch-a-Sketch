// Select DOM elements that we need

// Select element to display the grid size to the user
const display = document.querySelector("#sizeOutput");

// Select the grid container itself
const canvas = document.querySelector(".grid");

// Select the range slider element that carries the value of the size 
let gridDimensions = document.querySelector("#gridSize");

// Display default grid of 8 x 8
for (i = 0; i < parseInt(gridDimensions.value)*parseInt(gridDimensions.value); i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid-item");
    gridDiv.addEventListener("mouseover", function() {
        gridDiv.setAttribute("style", "background-color: black;")
    })
    canvas.appendChild(gridDiv);
}


// Add an event listener to the range slider input
gridDimensions.addEventListener("input", function() {

    // Store the value that will be the dimension of the grid
    let size = parseInt(gridDimensions.value);

    // Display the grid dimension to the user
    display.textContent = `${size} x ${size}`;

    // Clear the canvas(grid container) before we add new div elements each time
    // the slider is changed
    canvas.innerHTML = ""

    // Add the grid-template-columns and grid-template-rows properties to the 
    // grid container so we can define the correct dimensions
    canvas.setAttribute("style", `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr)`);

    // Loop to create the divs that form the grid using the dimensions specified
    for (i = 0; i < size*size; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("grid-item");
        gridDiv.addEventListener("mouseover", function() {
            gridDiv.setAttribute("style", "background-color: black;")
        })
        canvas.appendChild(gridDiv);
    }
})
