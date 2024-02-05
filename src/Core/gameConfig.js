export const canvas = document.getElementById("game"); // Game canvas, main window of the game
export const ctx = canvas.getContext("2d"); // Context of the canvas

// Global parameters (will be export in a xml file or whatever is commonly used for configuration)
// gameConfig: tile, timeLimitValue, gridColor
let tileSize = 10; // Size of a tile in px
let timeLimitValue = 60 * 60 * 1000; // 1 hour time limit
let gridColor = "transparent"; // Color of the grid lines and columns

// snakeConfig: head, body, facingDirection, headColor, bodyColor
let head = { x: canvas.width / tileSize / 2, y: canvas.height / tileSize / 2 }; // Initial pos head in px
let body = []; // Initial body part
let facingDirection = "up"; // Initial facing direction
let headColor = "#60A534"; // Initial head color
let bodyColor = "#A5C663"; // Initial body color

// fruitConfig: color (doesn't work yet because of bad import statement)
// let coords = { x: 50, y: 50 }; // Initial fruit position
// let fruitColor = "#C53030"; // Initial fruit color

export const gameConfig = {
    window: { width: canvas.width, height: canvas.height },
    tile: { x: tileSize, y: tileSize },
    timeLimitValue: timeLimitValue,
    gridColor: gridColor
};


export const snakeConfig = {
    head: head,
    body: body,
    facingDirection: facingDirection,
    headColor: headColor,
    bodyColor: bodyColor,
};

// export const fruitConfig = {
//     coords: coords,
//     color: fruitColor,
//     // Other parameter will be added later
// };