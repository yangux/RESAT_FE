import { getCurrentValue, showTime } from "./funcs.js";

const inputList = document.querySelectorAll("#timeView input");

const inputHour = document.querySelector("#hour");
const inputMinute = document.querySelector("#minute");
const inputSecond = document.querySelector("#second");

const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");

let hour, minute, second;
let timer;

inputList.forEach((input) =>
  input.addEventListener("click", function () {
    this.value = "";
  })
);

function setTimer() {
  if (second > 0) {
    second--;
  } else {
    if (minute > 0) {
      minute--;
      second = 59;
    } else {
      if (hour > 0) {
        hour--;
        minute = 59;
        second = 59;
      } else {
        clearInterval(timer);
      }
    }
  }
  showTime(hour, inputHour);
  showTime(minute, inputMinute);
  showTime(second, inputSecond);
}

startBtn.addEventListener("click", () => {
  hour = getCurrentValue(inputHour);
  minute = getCurrentValue(inputMinute);
  second = getCurrentValue(inputSecond);

  showTime(hour, inputHour);
  showTime(minute, inputMinute);
  showTime(second, inputSecond);

  timer = setInterval(setTimer, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
});

resetBtn.addEventListener("click", () => {
  hour = 0;
  minute = 0;
  second = 0;

  showTime(hour, inputHour);
  showTime(minute, inputMinute);
  showTime(second, inputSecond);
});
