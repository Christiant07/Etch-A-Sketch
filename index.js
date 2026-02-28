/*
Requiremmets:
    - prompt the user for a grid height and width
    - create
    - when a pen is hoveirng over a block, color it
    - for the rainbow color, use a random opertaion to siwthc between colors maybe
    - create an eraser function
    - color palette to choose from or offer to pick a specific color use input
    - reset button
    - when adding buttons, put them in column format

*/

// create a function to chnage the grid that takes in a num to square
//document get element by id for the column and style it to string styling
//same for rows

let size = prompt("Enter a Height and Width:");
console.log(size);
createGrid(size);

function createGrid(num) {
    string = "repeat(" + num + "," + "px)";
    document.getElementById("grid").style.gridTemplateColumns = string;
    document.getElementById("grid").style.gridTemplateRows = string;
    for (let i = 0; i < num*num; i++) {
        div = document.createElement("div");
        div.classList.add("grid-");
        div.style.borderWidth = "3px";
        div.style.border = "solid black";
    }
} 