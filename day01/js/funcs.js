function getCurrentValue(input) {
  let currentValue = input.value;
  input.addEventListener("keydown", (e) => {
    currentValue = e.target.value;
    input.value = currentValue;
  });

  return Number(currentValue);
}

function showTime(time, input) {
  time = String(time);
  input.value = time.length === 1 ? `0${time}` : time;
}

export { getCurrentValue, showTime };
