export const snakeSpeed = 1
const snakeBody = [{ x: 10, y: 11 }];


export function update() {
    addSegments()

    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = food.y;
        snakeElement.style.gridColumnStart = food.x;
        snakeElement.classList.add('food')
        gameBoard.appendChild(snakeElement)
    })
}
