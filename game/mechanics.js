const wizard = document.querySelector("#wizard");
let x = 0;
let y = 0;
let step = 50;


const maxX = window.innerWidth - 50;
const maxY = window.innerHeight - 50;

document.addEventListener("keydown", (move) => {
   

    if (move.key === "w"){
        y -= step;
    }else if (move.key === "a"){
        x -= step;
    }else if (move.key === "s"){
        y += step;
    }else if (move.key === "d"){
        x += step;
    }

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    wizard.style.left = x + "px";
    wizard.style.top = y + "px";
});

const rect = wizard.getBoundingClientRect();

console.log("Visual left edge:", rect.left);
console.log("Visual right edge:", rect.right);
console.log("Visual top edge:", rect.top);
console.log("Visual bottom edge:", rect.bottom);
console.log("Window width:", window.innerWidth);
console.log("Window height:", window.innerHeight);