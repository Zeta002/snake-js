import {gameConfig, ctx, snakeConfig} from "../Core/gameConfig.js";

export class Snake {
  constructor() {
    this.head = snakeConfig.head;
    this.body = snakeConfig.body;
    this.facingDirection = snakeConfig.facingDirection;
    this.headColor = snakeConfig.headColor;
    this.bodyColor = snakeConfig.bodyColor;
    // Ajouter fonctionnalité couleur de plus en plus claire ou sombre en fonction de la taille du serpent
    // this.bodyColor = () => {
    //
    // }
  }

  move() {
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
  }

  updateCoords(direction) {
    const axis = direction === "up" || direction === "down" ? "y" : "x";
    const sign = direction === "up" || direction === "left" ? -1 : 1;
    this.head[axis] += sign * gameConfig.tile[axis];

    this.body.unshift({ ...this.head });
    this.body.pop();
  }

  // draw() {
  //   ctx.fillStyle = this.headColor;
  //   ctx.fillRect(this.head.x, this.head.y, configInstance.tile.x, configInstance.tile.y);
  //   this.body.forEach((part) => {
  //     ctx.fillStyle = this.bodyColor;
  //     ctx.fillRect(part.x, part.y, configInstance.tile.x, configInstance.tile.y);
  //   });
  // }
}
