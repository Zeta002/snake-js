import { gameConfig } from "../Core/gameConfig.js";
import { timerInstance } from "../Core/globalVariables.js";

export function time() {
  function timerLimit(time) {
    setTimeout(() => {
      alert("Time is up!");
      timerInstance.pause();
      timerInstance.reset();
    }, time);
  }

  timerLimit(gameConfig.timeLimitValue); // 1 hour time limit
}
