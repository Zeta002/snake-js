import { Snake } from "../Class/Snake.js";
import { Fruit } from "../Class/Fruit.js";
import { Grid } from "../Class/Grid.js";
import { gameConfig, ctx } from "./gameConfig.js";

export default class Game {
    constructor(state = "stopped", snake = new Snake(), fruit = new Fruit(), grid = new Grid()) {
        this.state = state;
        this.snake = snake;
        this.fruit = fruit;
        this.grid = grid;
        this.matFruit = Array(grid.rows)
            .fill(undefined)
            .map(() => Array(grid.cols).fill(0));
        this.initGameObjectPosition(this.snake, this.grid, this.fruit);
    }

    initGameObjectPosition(snake, grid, fruit) {
        grid.addToMatrix(snake.head);
        this.drawSnake(snake.head);
        snake.body.forEach((part) => {
            grid.addToMatrix(part);
        });
        grid.addToMatrix(fruit);
        this.drawFruit();
        this.matFruit[fruit.coords.x][fruit.coords.y] = fruit;
    }

    // TODO : Generate new fruit randomly between number that are not occupied by snake and not using only random
    // newFruit() {
    //     this.matFruit.forEach((row) => {
    //         row.forEach((column) => {
    //             if()
    //         });
    //     });
    // }

    refresh() {
        this.snake.move();
        this.drawSnake();

        requestAnimationFrame(this.refresh.bind(this));
    }

    drawSnake() {
        ctx.fillStyle = this.snake.headColor;
        console.log("supose rect snake:", this.snake.head.x * gameConfig.tile.x, this.snake.head.y * gameConfig.tile.x, gameConfig.tile.x, gameConfig.tile.y)
        ctx.fillRect(this.snake.head.x * gameConfig.tile.x, this.snake.head.y * gameConfig.tile.x, gameConfig.tile.x, gameConfig.tile.y);
    }

    drawFruit() {
        ctx.fillStyle = this.fruit.color;
        ctx.fillRect(this.fruit.coords.x * gameConfig.tile.x, this.fruit.coords.y * gameConfig.tile.y, gameConfig.tile.x, gameConfig.tile.y);
    }

    start() {
        this.state = "running";
    }

    stop() {
        this.state = "stopped";
    }

    togglePause() {
        if(this.state === "running") this.state = "paused";
        else if(this.state === "paused") this.state = "running";
    }
}