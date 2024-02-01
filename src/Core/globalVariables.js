import { Timer } from "../Class/Timer.js";
import { Grid } from "../Class/Grid.js";

export const grid = new Grid(); // The actual grid of the game, the one that's use in calculations
export const timerInstance = new Timer(); // The timer, if the time ends the game ends
export const start = document.getElementById("start"); // Start button
export const freeze = document.getElementById("freeze"); // Freeze button
export const reset = document.getElementById("reset"); // Reset button
