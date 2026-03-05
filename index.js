
let size = document.getElementById("size");
let gridPieces; //create the grid piece variable
createGrid(size.value || 10);//either retrieves the value that was inputed  into size or use 10 as the default grid

function createGrid(num) {
    let view = 40/num;
    string = "repeat(" + num + (", " + view + "vw)");//repeats an action, num col, and num rows.
    let gridBox = document.getElementById("grid")
    gridBox.innerHTML = "";
    gridBox.style.gridTemplateColumns = string;
    gridBox.style.gridTemplateRows = string;

    for (let i = 0; i < num*num; i++) {
        div = document.createElement("div");//creating a div in the document or html
        div.classList.add("gridpiece");//adding a class called gripieces to our div that holds all of them
        div.style.borderWidth = "3px";
        div.style.border = "solid black";
        gridBox.appendChild(div);//appends every div we created into the our grid box or grid from html
    }

    gridPieces = document.querySelectorAll(".gridpiece");//returns a list of every gridpieces in our grid box
    gridPieces.forEach((i) => i.addEventListener("mouseover", chooser)) //applies a listener to every elemnt where if we hover over it we apply some function
} 
/* string refers to a variable in our js file 
    that repeate sthe number of columns and rows 
    we will have creating sites*/


let reseter = document.getElementById("reset");
reseter.addEventListener("click", reset)
function reset() {
    gridPieces.forEach((i) => i.style.background = "#F7F0E6")//for evryr element in our grid box, set eahc grid piece to white
}

let erasing = document.getElementById("eraser");
let pen = document.getElementById("pen");
let colorPicker = document.getElementById("color-picker");

erasing.addEventListener("click", () => {switcher = 0})
pen.addEventListener("click", () => {switcher = 1})

let switcher = 1;
function chooser() {
    if (switcher == 0) {
        this.style.background = "#F7F0E6";;
    } else {
        this.style.backgroundColor = colorPicker.value;
    }
}