import { buttons } from "../Utilities/buttons.js";
import { time } from "../Utilities/time.js";
import Game from "./Game.js";

buttons(); // Buttons logic
time(); // Timer logic

// const grid = new Grid();
// const snake = new Snake();
// const fruit = new Fruit();

const game = new Game();

// game.refresh();

// Temp variables
let lastTime = 0;
let deltaTime = 0;
const frameRate = 10;
const frameDelay = 1000 / frameRate;

let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

// Not finished, need to be reworked
// function update() {
//     let currentTime = new Date().getTime();
//     let deltaTime = currentTime - lastTime;
//
//     if (deltaTime > frameDelay) {
//         // Effacer le canvas
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//
//         // Mise à jour du Snake
//         snake.move();
//
//         // Dessiner le Snake sur le canvas
//         drawSnake();
//
//         // Réinitialisation du temps écoulé
//         deltaTime = 0;
//     }
//
//     // Appel de la fonction update à la prochaine frame
//     requestAnimationFrame(update);
// }

// Test
// for (let i = 0; i < 1000; i++) {
//   setTimeout(() => {
//     let rng = Math.round(Math.random() * 4);
//     if (rng === 0) rng = "up";
//     else if (rng === 1) rng = "down";
//     else if (rng === 2) rng = "left";
//     else if (rng === 3) rng = "right";
//     else if (rng === 4) rng = "up";
//     snake.facingDirection = rng;
//     snake.move(rng);
//     console.log(snake.head);
//   }, i * 1000);
// }
