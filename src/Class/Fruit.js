import { config, ctx } from "../Core/config.js";
import { roundToNearestTen } from "../Utilities/utils.js";

export class Fruit {
  constructor() {
    this.x = roundToNearestTen(
      Math.random() * (config.window.width - config.tile.x),
    );
    this.y = roundToNearestTen(
      Math.random() * (config.window.height - config.tile.y),
    );
    this.init();
  }

  init() {
    ctx.fillStyle = "#F87171";
    ctx.fillRect(this.x, this.y, config.tile.x, config.tile.y);
  }
}
