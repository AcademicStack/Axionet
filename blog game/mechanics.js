const hero = document.querySelector("#hero");
let x = 0;
let y = 0;
let step = 2.2;

const frameW = 24;
const frameH = 24;
const frameCount = 8;
const rowIndex = 1;
const frameDelay = 2;

let animFrame = 0;
let animTick = 0;

let animFrameChanged = true;

const keys = {};

function heroAnimation(move){
    if (move) {
        animTick++;
        if (animTick >= frameDelay){
            animTick = 0;
            let oldFrame = animFrame;
            animFrame = (animFrame + 1) % frameCount;
            animFrameChanged = true;
        }
    }else{
        if (animFrame !== 0){
            animFrame = 0;
            animFrameChanged = true;
        }
    };
};

document.addEventListener("keydown", (ce) => {
    keys[ce.key.toLowerCase()] = true;
});

document.addEventListener("keyup", (ce) => {
    keys[ce.key.toLowerCase()] = false;
});

function gameLoop(){
let move = keys["w"] || keys["a"] || keys["s"] || keys["d"];

    if (keys["w"]) y -= step;
    if (keys["a"]) x -= step;
    if (keys["s"]) y += step;
    if (keys["d"]) x += step;

    // Boundery checking
    const maxX = window.innerWidth - frameW;
    const maxY = window.innerHeight - frameH;
    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    heroAnimation(move);

    if (animFrameChanged){
    hero.style.backgroundPosition = `-${animFrame * frameW}px -${rowIndex * frameH}px`;
        animFrameChanged = false;
    };

    hero.style.left = x + "px";
    hero.style.top = y + "px";

    requestAnimationFrame(gameLoop);
};

gameLoop();







// const rect = hero.getBoundingClientRect();

// console.log("Visual left edge:", rect.left);
// console.log("Visual right edge:", rect.right);
// console.log("Visual top edge:", rect.top);
// console.log("Visual bottom edge:", rect.bottom);
// console.log("Window width:", window.innerWidth);
// console.log("Window height:", window.innerHeight);

