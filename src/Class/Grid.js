import { gameConfig, ctx } from "../Core/gameConfig.js";

export class Grid {
  constructor() {
    this.rows = gameConfig.window.width / gameConfig.tile.x;
    this.cols = gameConfig.window.height / gameConfig.tile.y;
    this.matrix = Array(this.rows)
        .fill(undefined)
        .map(() => Array(this.cols).fill(0));
    this.init();
  }

  init() {
    ctx.strokeStyle = gameConfig.gridColor;
    ctx.clearRect(0, 0, gameConfig.window.width, gameConfig.window.height);

    // this.initSnake();
    // this.initFruit();

    for (let i = 0; i <= gameConfig.window.width; i += gameConfig.tile.x) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, gameConfig.window.height);
      ctx.stroke();
    }
    for (let i = 0; i <= gameConfig.window.height; i += gameConfig.tile.y) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(gameConfig.window.width, i);
      ctx.stroke();
    }
  }

  addToMatrix(object) {
    if(object === null) console.error("Error: object is null");
    else if(object.x === undefined || object.y === undefined) return;
    else if(object.x < this.rows && object.y < this.cols) {
      this.matrix[object.x][object.y] = object;
    } else {
      console.error(`Error: object coordinates (${object.x}, ${object.y}) are out of grid bounds`);
    }
    if(object === undefined) console.error("Error: object is undefined");
  }

  // initSnake() {
  //   ctx.fillStyle = configInstance.snake.headColor;
  //   ctx.fillRect(
  //     configInstance.snake.head.x,
  //     configInstance.snake.head.y,
  //     configInstance.tile.x,
  //     configInstance.tile.y,
  //   );
  // }

  // initFruit() {
  //   ctx.fillStyle = fruit.color;
  //   ctx.fillRect(fruit.coords.x, fruit.coords.y, configInstance.tile.x, configInstance.tile.y);
  //   if(fruit.coords.x === configInstance.snake.head.x && fruit.coords.y === configInstance.snake.head.y) {
  //     this.initFruit();
  //   }
  // }
}
