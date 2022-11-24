let container = document.querySelector(".container")
let colorPicker = document.querySelector(".colorSelection");
let colorMode = document.querySelector(".colorMode");
let rainbowMode = document.querySelector(".rainbowMode");
let eraser = document.querySelector(".eraser");
let clear = document.querySelector(".clear");
let sizeParagraph = document.querySelector(".sizeParagraph");
let boxesQuantity = document.querySelector(".boxesQuantity");

let numberOfBoxes = 256;
let boxesSize = 40;
let color = "#383838";

//Media Query
const mediaQuery = window.matchMedia("(max-width: 650px)");
function handleQueryChange(e){
    if(e.matches){
        boxesSize = 25;
    }
}

mediaQuery.addListener(handleQueryChange);
handleQueryChange(mediaQuery);

//Initial canvas
for(let i=1; i<= numberOfBoxes; i++){
    let newDiv = document.createElement("div");
    newDiv.classList.add("canvasBox");
    newDiv.style.width = `${boxesSize}px`;
    newDiv.style.height = `${boxesSize}px`;
    container.appendChild(newDiv);
}

let canvasBoxes = Array.from(document.querySelectorAll(".canvasBox"));
    canvasBoxes.forEach(item => item.addEventListener("mouseover", item => {
        item.target.style.backgroundColor = `${color}`;
    }));

//Change the color
colorPicker.addEventListener("input", (e) => {
    canvasBoxes.forEach(item => item.addEventListener("mouseover", item => {
        color = e.target.value;
        item.target.style.backgroundColor = `${color}`;
    }));
    colorPicker.value= e.target.value;
})

//Activate color mode
colorMode.addEventListener("click", () => {
    canvasBoxes.forEach(item => item.addEventListener("mouseover", item => {
        color = "#383838";
        item.target.style.backgroundColor = `${color}`;
    }));
    colorPicker.value= "#383838";
});

//Erase color in each div
eraser.addEventListener("click", () => {   
    canvasBoxes.forEach(item => item.addEventListener("mouseover", item => {
        color = "#ffffff";
        item.target.style.backgroundColor = `${color}`;
    }));
    colorPicker.value= "#ffffff";
});

//Clear all canvas
clear.addEventListener("click", () => {
    canvasBoxes.forEach(item => {
        item.style.backgroundColor = "#ffffff";
    })
})

//Boxes quantity for de container
boxesQuantity.addEventListener("mouseup", (e) => {
    sizeParagraph.textContent = boxesQuantity.value + " x " + boxesQuantity.value;
    paintCanvas(boxesQuantity.value);
});

//Rainbow mode
rainbowMode.addEventListener("click", () => {
    canvasBoxes.forEach(item => item.addEventListener("mouseover", item => {
        color = randomRGB();
        item.target.style.backgroundColor = `${color}`;
    }));
})

//Make a random RGB color
function randomRGB() {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    const finalColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    return finalColor;
}



//Change quantity of boxes
function paintCanvas(value) {

    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    // for(let i=0; i<=canvasBoxes; i++){
    //     canvasBoxes[i].remove()
    // }

    numberOfBoxes = value * value;
    boxesSize = 640 / value;

    for(let i=1; i<= numberOfBoxes; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("canvasBox");
        newDiv.style.width = `${boxesSize}px`;
        newDiv.style.height = `${boxesSize}px`;
        container.appendChild(newDiv);
    }

    paintTheDiv();
}

//Paint each div
function paintTheDiv() {
    canvasBoxes = Array.from(document.querySelectorAll(".canvasBox"));
    canvasBoxes.forEach(item => item.addEventListener("mouseover", item => {
        item.target.style.backgroundColor = `${color}`;
    }));
}


