import { generateMemo, toggleMemo, getMemo, addMemo } from "./memo.js";

let year = new Date().getFullYear();
let month = new Date().getMonth() + 1;
let selectedDay;

const displayDate = document.querySelector("#displayDate");
const displayDateSpan = displayDate.querySelector("span");
const prevBtn = displayDate.querySelector(".prevBtn");
const nextBtn = displayDate.querySelector(".nextBtn");
const calendar = document.querySelector("#calendar");

async function init() {
  displayDateSpan.innerHTML = `${year}년 ${month}월`;
  generateCalendar(year, month);
  generateMemo();
  selectedDay = selectDate();

  const textarea = document.querySelector(".textareaContainer textarea");
  const submitBtn = document.querySelector(".submitBtn");

  submitBtn.addEventListener("click", () => {
    addMemo(year, month, selectedDay);
    getMemo(year, month, selectedDay);
    textarea.value = "";
  });
}
init();

async function selectDate() {
  const dates = await calendar.querySelectorAll("td");

  for (const date of dates) {
    date.addEventListener("click", function () {
      selectedDay = Number(date.innerText);

      changeDate(year, month, selectedDay);

      return selectedDay;
    });
  }
}

function generateCalendar(year, month) {
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0).getDate();

  let dayCount = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");

      if ((i === 0 && j < firstDay.getDay()) || dayCount > lastDay) {
        cell.innerHTML = "";
      } else {
        cell.innerHTML = dayCount;
        dayCount++;
      }

      row.append(cell);
    }
    calendar.append(row);
  }
}

function clearCalendar() {
  const tableRows = calendar.querySelectorAll("tr");
  tableRows.forEach((row) => {
    if (!row.classList.contains("thead")) {
      row.remove();
    }
  });
}

function changeDate(year, month, day) {
  const textareaContainer = document.querySelector(".textareaContainer");
  const memoDate = textareaContainer.querySelector(".memoDate");

  memoDate.innerText = `${year}년 ${month}월 ${day}일`;
  getMemo(year, month, day);
}

prevBtn.addEventListener("click", function () {
  month--;

  if (month < 1) {
    month = 12;
    year--;
  }
  clearCalendar();
  init();
  toggleMemo();
});

nextBtn.addEventListener("click", function () {
  month++;

  if (month > 12) {
    month = 1;
    year++;
  }
  clearCalendar();
  init();
  toggleMemo();
});
