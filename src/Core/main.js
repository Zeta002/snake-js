import { Snake } from "../Class/Snake.js";
import { Fruit } from "../Class/Fruit.js";
import { buttons } from "../Utilities/buttons.js";
import { time } from "../Utilities/time.js";
import { Grid } from "../Class/Grid.js";

buttons(); // Buttons logic
time(); // Timer logic

const grid = new Grid();
const snake = new Snake();
const fruit = new Fruit();

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
