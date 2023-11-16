let year = new Date().getFullYear();
let month = new Date().getMonth() + 1;

const container = document.querySelector(".container");
const displayDate = document.querySelector("#displayDate");
const displayDateSpan = displayDate.querySelector("span");
const prevBtn = displayDate.querySelector(".prevBtn");
const nextBtn = displayDate.querySelector(".nextBtn");
const calendar = document.querySelector("#calendar");

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

        const textareaContainer = document.createElement("div");
        const textArea = document.createElement("textarea");
        const memoDate = document.createElement("span");

        textareaContainer.id = `${year}-${month}-${dayCount}`;
        textareaContainer.classList.add("textareaContainer");
        textareaContainer.classList.add("hide");

        memoDate.append(`${year}년 ${month}월 ${dayCount}일`);

        textareaContainer.append(memoDate, textArea);
        container.append(textareaContainer);

        cell.addEventListener("click", function () {
          const textareaContainers =
            document.querySelectorAll(".textareaContainer");
          Array.from(textareaContainers).forEach((textareaContainer) => {
            textareaContainer.classList.add("hide");
          });

          let dayCheck = `${year}-${month}-${this.innerText}`;
          if (dayCheck === textareaContainer.id) {
            textareaContainer.classList.toggle("hide");
          }
        });

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

prevBtn.addEventListener("click", function () {
  month--;

  if (month < 1) {
    month = 12;
    year--;
  }
  clearCalendar();
  init();
});

nextBtn.addEventListener("click", function () {
  month++;

  if (month > 12) {
    month = 1;
    year++;
  }
  clearCalendar();
  init();
});

function init() {
  generateCalendar(year, month);
  displayDateSpan.innerHTML = `${year}년 ${month}월`;
}
init();
