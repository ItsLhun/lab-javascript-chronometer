class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.milIntervalId = 0;
    this.milCurrentTime = 0;
    this.milliseconds = 0;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      callback ? callback() : null;
      this.currentTime++;
    }, 1000);
    this.milIntervalId = setInterval(() => {
      this.milCurrentTime++;
      if (this.milliseconds === 99) this.milliseconds = 0;
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    return value > 10 ? value.toString() : '0' + value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.milIntervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes(this.currentTime)
    )}:${this.computeTwoDigitNumber(this.getSeconds(this.currentTime))}`;
  }
  printMilliseconds() {}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
