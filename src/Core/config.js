import { roundToNearestTen } from "../Utilities/utils.js";

export const canvas = document.getElementById("game"); // Game canvas, main window of the game
export const ctx = canvas.getContext("2d"); // Context of the canvas

class config {
  constructor() {
    this.window = { width: canvas.width, height: canvas.height }; // Size of the game window in px
    this.tile = { x: 10, y: 10 }; // Size of a tile in px
    this.timeLimitValue = 60 * 60 * 1000; // 1 hour time limit
    this.gridColor = "#4B5563"; // Color of the grid lines and columns
    this.snake = {
      head: { x: canvas.width / 2, y: canvas.height / 2 }, // Position src head in px
      body: [], // Initial body part
      facingDirection: "up", // Initial facing direction
      headColor: "#60A534", // Initial head color
      bodyColor: "#A5C663", // Initial body color
    };
  }
}

export const configInstance = new config();

export const fruit = {
    coords: {
        x: roundToNearestTen(Math.random() * (configInstance.window.width - 2 * configInstance.tile.x) + configInstance.tile.x),
        y: roundToNearestTen(Math.random() * (configInstance.window.height - 2 * configInstance.tile.y) + configInstance.tile.y)
    },
    color: "#C53030", // Color of the fruit
    // Other parameter will be added later
};