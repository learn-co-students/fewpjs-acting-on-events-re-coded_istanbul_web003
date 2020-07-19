// Your code here

let dodger = document.getElementById("dodger");
let dodgerWidth = getComputedStyle(dodger).width.replace("px", "");
let game = document.getElementById("game");
let gameWidth = getComputedStyle(game).width.replace("px", "");
console.log(gameWidth);
console.log(dodgerWidth);


function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
});

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > gameWidth - dodgerWidth) {
      dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});