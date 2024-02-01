import { config, ctx } from "../Core/config.js";

export class Grid {
  constructor() {
    this.rows = config.window.width / config.tile.x;
    this.cols = config.window.height / config.tile.y;
    this.matrix = Array(this.rows)
      .fill(undefined)
      .map(() => Array(this.cols).fill(0));
    this.init();
  }

  init() {
    ctx.strokeStyle = config.gridColor;
    ctx.clearRect(0, 0, config.window.width, config.window.height);
    for (let i = 0; i <= config.window.width; i += config.tile.x) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, config.window.height);
      ctx.stroke();
    }
    for (let i = 0; i <= config.window.height; i += config.tile.y) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(config.window.width, i);
      ctx.stroke();
    }
  }
}
