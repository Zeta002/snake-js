export const canvas = document.getElementById("game"); // Game canvas, main window of the game
export const ctx = canvas.getContext("2d"); // Context of the canvas

export const config = {
  window: { width: canvas.width, height: canvas.height }, // Size of the game window in px
  tile: { x: 10, y: 10 }, // Size of a tile in px
  timeLimitValue: 60 * 60 * 1000, // 1 hour time limit
  gridColor: "#4B5563", // Color of the grid lines and columns
  snake: {
    head: { x: canvas.width / 2, y: canvas.height / 2 }, // Position src head in px
    body: [], // Initial body part
    facingDirection: "up", // Initial facing direction
    headColor: "#60A534", // Initial head color
    bodyColor: "#A5C663", // Initial body color
  },
};
