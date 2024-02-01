import { configInstance, fruit, ctx } from "../Core/config.js";

export class Grid {
  constructor() {
    this.rows = configInstance.window.width / configInstance.tile.x;
    this.cols = configInstance.window.height / configInstance.tile.y;
    this.matrix = Array(this.rows)
      .fill(undefined)
      .map(() => Array(this.cols).fill(0));
    this.init();
  }

  init() {
    ctx.strokeStyle = configInstance.gridColor;
    ctx.clearRect(0, 0, configInstance.window.width, configInstance.window.height);

    this.initSnake();
    this.initFruit();

    for (let i = 0; i <= configInstance.window.width; i += configInstance.tile.x) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, configInstance.window.height);
      ctx.stroke();
    }
    for (let i = 0; i <= configInstance.window.height; i += configInstance.tile.y) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(configInstance.window.width, i);
      ctx.stroke();
    }
  }

  addToMatrix(object) {
    this.matrix[object.x][object.y] = object;
  }

  initSnake() {
    ctx.fillStyle = configInstance.snake.headColor;
    ctx.fillRect(
      configInstance.snake.head.x,
      configInstance.snake.head.y,
      configInstance.tile.x,
      configInstance.tile.y,
    );
  }

  initFruit() {
    ctx.fillStyle = fruit.color;
    ctx.fillRect(fruit.coords.x, fruit.coords.y, configInstance.tile.x, configInstance.tile.y);
    if(fruit.coords.x === configInstance.snake.head.x && fruit.coords.y === configInstance.snake.head.y) {
      this.initFruit();
    }
  }
}
