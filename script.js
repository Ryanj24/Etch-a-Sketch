// Select DOM elements that we need

// Select element to display the grid size to the user
const display = document.querySelector("#sizeOutput");

// Select the grid container itself
const canvas = document.querySelector(".grid");

// Select the clear button from the DOM
const clear = document.querySelector("#clearButton");

// Select the colour selector from the DOM
const colourPicker = document.querySelector("#rgbPicker");


// Select the range slider element that carries the value of the size 
let gridDimensions = document.querySelector("#gridSize");

// Create default grid of 8 x 8
for (i = 0; i < parseInt(gridDimensions.value)*parseInt(gridDimensions.value); i++) {
    
    // Create div element
    const gridDiv = document.createElement("div");
    
    // Add class of "grid-item" to the div
    gridDiv.classList.add("grid-item");
    
    // Add event listener to the div so when mouse moved over it, background changes
    gridDiv.addEventListener("mouseover", function() {
        gridDiv.setAttribute("style", `background-color: ${colourPicker.value};`)
    })
    
    // Add the div to the canvas
    canvas.appendChild(gridDiv);
}

// Clear button that clears the canvas for the user
clear.addEventListener("click", function() {
    
    // Remove divs currently in use
    canvas.innerHTML = "";

    // re-create default grid of 8 x 8
    for (i = 0; i < parseInt(gridDimensions.value)*parseInt(gridDimensions.value); i++) {
        
        // Create div element
        const gridDiv = document.createElement("div");
        
        // Add class of "grid-item" to the div
        gridDiv.classList.add("grid-item");
        
        // Add event listener to the div so when mouse moved over it, background changes
        gridDiv.addEventListener("mouseover", function() {
            gridDiv.setAttribute("style", `background-color: ${colourPicker.value};`)
        })
        
        // Add the div to the canvas
        canvas.appendChild(gridDiv);
    }
})

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
        
        // Create div element
        const gridDiv = document.createElement("div");
        
        // Add the "grid-item" class
        gridDiv.classList.add("grid-item");
        
        // Add mouseover event listener to change background colour
        gridDiv.addEventListener("mouseover", function() {
            gridDiv.setAttribute("style", `background-color: ${colourPicker.value};`)
        })
        
        // Add the div to the canvas to create grid
        canvas.appendChild(gridDiv);
    }
})
