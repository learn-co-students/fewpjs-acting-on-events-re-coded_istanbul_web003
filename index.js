// Your code here
const dodger = document.querySelector("#dodger");

function moveDodgerLeft() {
    let leftPixelsStr = dodger.style.left.replace("px", "");
    let leftPixelsInt = parseInt(leftPixelsStr, 10);
    if (leftPixelsInt > 0) {
        dodger.style.left = `${leftPixelsInt -1}px`;
        console.log(dodger.style.left);
    }
}

function moveDodgerRight() {
    
    let leftPixelsStr = dodger.style.left.replace("px", "");
    let leftPixelsInt = parseInt(leftPixelsStr, 10);
    if (leftPixelsInt < 360) {
        dodger.style.left = `${leftPixelsInt +1}px`;
        console.log(dodger.style.left);
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key == "ArrowRight") {
        moveDodgerRight();
    }
})


