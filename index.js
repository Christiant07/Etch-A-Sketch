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

// let size = prompt("Enter a Height and Width:");
// console.log(size);
createGrid(10);
let px = 500/size;


let gridPieces = document.querySelectorAll(".gridpiece");//returns a list of every gridpice in our grid box
gridPieces.forEach((i) => i.addEventListener("mouseover", chooser)) //applies a listener to every elemnt where if we hover over it we apply some function
 
// function coloring() {
//     console.log("reached")
//     this.style.background = "pink";
//     console.log(this.style.background)
// }

// function erase() {
//     this.style.background = "white";
// }

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

let switcher = null;
function chooser() {
    if (switcher == 0) {
        this.style.background = "#F7F0E6";;
    } else {
        this.style.backgroundColor = colorPicker.value;
    }
}

function createGrid(num) {
    // string = "repeat(" + num + (", " + 33 + "px)");
    // document.getElementById("grid").style.gridTemplateColumns = string;
    // document.getElementById("grid").style.gridTemplateRows = string;
    let gridBox = document.getElementById("grid")
    for (let i = 0; i < num*num; i++) {
        div = document.createElement("div");//creating a div in the document or html
        div.classList.add("gridpiece");//adding a class called gripieces to our div that holds all of them
        div.style.borderWidth = "3px";
        div.style.border = "solid black";
        gridBox.appendChild(div);//appends every div we created into the our grid box or grid from html
    }
} 













// 'use client';

// type ButtonProps = {
//     text: string;
//     color: string;
//     fontSize: number;
//   };
  
//   export default function Button({ text, color, fontSize }: ButtonProps) {
//     const handleClick = () => alert(`Clicked ${text}`);
//     return (
//       <button onClick={handleClick} style={{ color, fontSize: `${fontSize}px` }}>
//         {text}
//       </button>
//     );
//   }
  