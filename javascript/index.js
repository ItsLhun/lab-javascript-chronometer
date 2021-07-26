const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = [minutes[0]];
  minUniElement.textContent = [minutes[1]];
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = [seconds[0]];
  secUniElement.textContent = [seconds[1]];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.textContent = 'STOP';
}

function setSplitBtn() {
  btnRightElement.textContent = "SPLIT";
}

function setStartBtn() {
  btnLeftElement.textContent = 'START';
}

function setResetBtn() {
  btnRightElement.textContent = "RESET";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn()
  }
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {});
