let container = document.querySelector(".container")

let numberOfBoxes = 256;

for(let i=1; i<= numberOfBoxes; i++){
    let newDiv = document.createElement("div");
    newDiv.classList.add("canvasBox");
    container.appendChild(newDiv);
}

let canvasBoxes = Array.from(document.querySelectorAll(".canvasBox"));

canvasBoxes.forEach(item => item.addEventListener("mouseover", item => {
    item.target.classList.add("painted");
}));

