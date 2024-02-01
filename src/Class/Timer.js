export class Timer {
  constructor() {
    this.intervalId = null;
    this.element = document.getElementById("timer");
  }

  reset() {
    this.element.innerText = "0";
  }

  increment() {
    this.element.innerText++;
  }

  pause() {
    clearInterval(this.intervalId);
  }
}
