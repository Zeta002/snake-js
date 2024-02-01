import { configInstance, ctx } from "../Core/config.js";

export class Snake {
  constructor() {
    this.head = configInstance.snake.head;
    this.body = configInstance.snake.body;
    this.facingDirection = configInstance.snake.facingDirection;
    this.headColor = configInstance.snake.headColor;
    this.bodyColor = configInstance.snake.bodyColor;
    // Ajouter fonctionnalité couleur de plus en plus clair ou sombre en fonction de la taille du serpent
    // this.bodyColor = () => {
    //
    // }
  }

  move() {
    ctx.clearRect(this.head.x, this.head.y, configInstance.tile.x, configInstance.tile.y);
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
    ctx.fillRect(this.head.x, this.head.y, configInstance.tile.x, configInstance.tile.y);
  }

  updateCoords(direction) {
    const axis = direction === "up" || direction === "down" ? "y" : "x";
    const sign = direction === "up" || direction === "left" ? -1 : 1;
    this.head[axis] += sign * configInstance.tile[axis];
  }
}
