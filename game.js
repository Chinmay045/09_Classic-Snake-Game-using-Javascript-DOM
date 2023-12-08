import { update as updateSnake, draw as drawSnake, snakeSpeed } from "./snake.js";
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let gameBoard = document.getElementById("game-board");
let lastRenderTime = 0;
function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondSinceLastRender < 1 / snakeSpeed) return;
    console.log("Render");
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);

}