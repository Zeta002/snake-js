import {
  start,
  freeze,
  reset,
  timerInstance,
} from "../Core/globalVariables.js";

export function buttons() {
  start.addEventListener("click", () => {
    timerInstance.intervalId = setInterval(() => {
      timerInstance.increment();
    }, 1000);
  });

  freeze.addEventListener("click", () => {
    timerInstance.pause();
  });

  reset.addEventListener("click", () => {
    timerInstance.pause();
    timerInstance.reset();
  });
}
