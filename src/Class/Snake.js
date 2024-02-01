import { config, ctx } from "../Core/config.js";

export class Snake {
  constructor() {
    this.head = config.snake.head;
    this.body = config.snake.body;
    this.facingDirection = config.snake.facingDirection;
    this.headColor = config.snake.headColor;
    this.bodyColor = config.snake.bodyColor;
    // Ajouter fonctionnalité couleur de plus en plus clair ou sombre en fonction de la taille du serpent
    // this.bodyColor = () => {
    //
    // }
    this.init();
  }

  init() {
    ctx.fillStyle = this.headColor;
    ctx.fillRect(
      config.window.width,
      config.window.height,
      config.tile.x,
      config.tile.y,
    );
    ctx.fillRect(this.head.x, this.head.y, config.tile.x, config.tile.y);
  }

  move() {
    ctx.clearRect(this.head.x, this.head.y, config.tile.x, config.tile.y);
    switch (this.facingDirection) {
      case "up":
        this.updateCoords(this.facingDirection);
        break;
      case "down":
        this.updateCoords(this.facingDirection);
        break;
      case "left":
        this.updateCoords(this.facingDirection);
        break;
      case "right":
        this.updateCoords(this.facingDirection);
        break;
      default:
        console.error("Error: facingDirection is not valid");
    }
    ctx.fillRect(this.head.x, this.head.y, config.tile.x, config.tile.y);
  }

  updateCoords(direction) {
    const axis = direction === "up" || direction === "down" ? "y" : "x";
    const sign = direction === "up" || direction === "left" ? -1 : 1;
    this.head[axis] += sign * config.tile[axis];
  }
}
