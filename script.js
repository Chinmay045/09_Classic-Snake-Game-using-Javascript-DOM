let lastRenderTime = 0;
const snakeSpeed = 2;
function main(currentTime){
    const secondSinceLastRender = (currentTime - lastRenderTime)/1000;
    if(secondSinceLastRender <1 /snakeSpeed) return;
    window.requestAnimationFrame(main)
    lastRenderTime = currentTime;
    console.log(secondSinceLastRender);
}

window.requestAnimationFrame(main);