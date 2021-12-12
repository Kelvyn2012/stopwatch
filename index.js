var timer = 0;
var timerInterval;
var ms = document.getElementById("milliseconds");
var seconds = document.getElementById("mainsecond");
var minutes = document.getElementById("mainminute");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start() {
  stop();
  timerInterval = setInterval(function () {
    timer += 1 / 60;
    let msval = Math.floor((timer - Math.floor(timer)) * 100);
    let secondsval = Math.floor(timer) - Math.floor(timer / 60) * 60;
    let minutesval = Math.floor(timer / 60);
    // ms.innerHTML = msval < 10 ? "0" + msval.toString() : msval;
    if (msval < 10) {
      ms.innerHTML = "0" + msval.toString();
    } else {
      ms.innerHTML = msval;
    }
    seconds.innerHTML =
      secondsval < 10 ? "0" + secondsval.toString() : secondsval;
    minutes.innerHTML =
      minutesval < 10 ? "0" + minutesval.toString() : minutesval;
  }, 1000 / 60);
}
function stop() {
  clearInterval(timerInterval);
}
function reset() {
  clearInterval();
  timer = 0;
  minutes.innerHTML = "00";
  ms.innerHTML = "00";
  seconds.innerHTML = "00";
}
