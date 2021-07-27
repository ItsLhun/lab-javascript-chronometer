class Chronometer {
  constructor() {
    this.intervalId = null;
    this.currentTime = 0;
    this.milIntervalId = 0;
    this.milliseconds = 0;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
    this.milIntervalId = setInterval(() => {
      this.milliseconds++;
      callback ? callback() : null;
      if (this.milliseconds === 99) this.milliseconds = 0;
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }
  getMiliseconds() {
    return this.milliseconds;
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
    this.milliseconds = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes(this.currentTime)
    )}:${this.computeTwoDigitNumber(
      this.getSeconds(this.currentTime)
    )}:${this.computeTwoDigitNumber(this.getMiliseconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
